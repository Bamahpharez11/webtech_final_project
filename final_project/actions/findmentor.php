<?php
session_start();
require_once('../includes/db.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Fetch mentors from database
try {
    $stmt = $pdo->query("
        SELECT u.full_name, u.email, mp.expertise, mp.experience_level 
        FROM sm_users u 
        JOIN sm_mentor_profiles mp ON u.user_id = mp.user_id 
        WHERE u.user_type = 'mentor'
    ");
    $mentors = $stmt->fetchAll();
} catch(PDOException $e) {
    $error = 'Failed to load mentors';
}
?>
<!DOCTYPE html>
<!-- Your existing HTML code -->
<!-- Replace static mentor cards with dynamic PHP data -->
<?php foreach($mentors as $mentor): ?>
    <div class="mentor-card">
        <h3><?php echo htmlspecialchars($mentor['full_name']); ?></h3>
        <p class="expertise"><?php echo htmlspecialchars($mentor['expertise']); ?></p>
        <p class="experience"><?php echo htmlspecialchars($mentor['experience_level']); ?></p>
        <a href="contact-mentor.php?id=<?php echo $mentor['user_id']; ?>" class="contact-btn">
            Contact Mentor
        </a>
    </div>
<?php endforeach; ?> 