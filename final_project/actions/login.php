<?php
session_start();
require_once('../database/db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

    try {
        // Get user from database
        $stmt = $pdo->prepare("
            SELECT user_id, full_name, email, password, user_type 
            FROM sm_users 
            WHERE email = ?
        ");
        
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        // Verify user exists and password is correct
        if ($user && password_verify($password, $user['password'])) {
            // Store user data in session
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['full_name'] = $user['full_name'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['user_type'] = $user['user_type'];
            $_SESSION['logged_in'] = true;

            // Redirect based on user type
            if ($user['user_type'] === 'mentor') {
                header('Location: ../views/mentor-dashboard.html');
            } else {
                header('Location: ../views/mentee-dashboard.html');
            }
            exit;
        } else {
            $_SESSION['error'] = "Invalid email or password";
            header('Location: ../views/login.html');
            exit;
        }

    } catch(PDOException $e) {
        $_SESSION['error'] = "Login failed. Please try again.";
        header('Location: ../views/login.html');
        exit;
    }
}
?> 