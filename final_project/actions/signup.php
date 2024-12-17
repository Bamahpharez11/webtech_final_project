<?php
session_start();
require_once('../database/db.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];
    $role = filter_var($_POST['role'], FILTER_SANITIZE_STRING);
    $skills = filter_var($_POST['skills'], FILTER_SANITIZE_STRING);

    if (!preg_match('/@ashesi\.edu\.gh$/', $email)) {
        $_SESSION['error'] = "Please use your Ashesi email address.";
        header('Location: ../views/signup.html');
        exit;
    }

    try {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare("
            INSERT INTO sm_users (full_name, email, password_hash, user_type) 
            VALUES (?, ?, ?, ?)
        ");
        
        $stmt->execute([$fullName, $email, $hashedPassword, $role]);
        $userId = $pdo->lastInsertId();

        if ($role === 'mentor') {
            $stmt = $pdo->prepare("
                INSERT INTO sm_mentor_profiles (user_id, expertise) 
                VALUES (?, ?)
            ");
            $stmt->execute([$userId, $skills]);
        }

        $_SESSION['success'] = "Account created successfully! Please log in.";
        header('Location: ../views/login.html');
        exit;

    } catch(PDOException $e) {
        $_SESSION['error'] = "Registration failed. Please try again.";
        header('Location: ../views/signup.html');
        echo "Registration failed. Please try again.";
        exit;
    }
}
?>
