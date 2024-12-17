<?php
session_start();
require_once('../includes/db.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    $_SESSION['redirect_after_login'] = $_SERVER['REQUEST_URI'];
    header('Location: login.php');
    exit;
}

// Get mentor details
$mentor_id = $_GET['id'] ?? null;
if ($mentor_id) {
    try {
        $stmt = $pdo->prepare("
            SELECT u.*, mp.* 
            FROM sm_users u 
            JOIN sm_mentor_profiles mp ON u.user_id = mp.user_id 
            WHERE u.user_id = ?
        ");
        $stmt->execute([$mentor_id]);
        $mentor = $stmt->fetch();
    } catch(PDOException $e) {
        $error = 'Failed to load mentor details';
    }
}

// Handle contact form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO sm_mentorship_requests 
            (student_id, mentor_id, message, availability) 
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute([
            $_SESSION['user_id'],
            $mentor_id,
            $_POST['message'],
            $_POST['availability']
        ]);
        
        $_SESSION['success'] = 'Your request has been sent to the mentor!';
        header('Location: findmentor.php');
        exit;
    } catch(PDOException $e) {
        $error = 'Failed to send request. Please try again.';
    }
}
?>
<!DOCTYPE html>
<!-- Your existing HTML code --> 