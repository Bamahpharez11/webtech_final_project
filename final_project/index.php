<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
require_once('includes/db.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SkillMatch - Connect, Learn, Grow</title>
    <link rel="stylesheet" href="assets/css/index.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="assets/images/skillmatch-logo.png" alt="SkillMatch Logo">
                <h1>SkillMatch</h1>
            </div>
            <ul class="nav-links">
                <li><a href="index.php">Home</a></li>
                <li><a href="views/mentor.php">Mentors</a></li>
                <li><a href="views/skills.php">Skills</a></li>
                <li><a href="views/login.php">Login</a></li>
                <li><a href="views/about.php">About</a></li>
            </ul>
            <div class="auth-buttons">
                <?php if(isset($_SESSION['user_id'])): ?>
                    <button id="logout-btn" onclick="window.location.href='views/logout.php'">Logout</button>
                <?php else: ?>
                    <button id="login-btn" onclick="window.location.href='views/login.php'">Login</button>
                    <button id="signup-btn" onclick="window.location.href='views/signup.php'">Sign Up</button>
                <?php endif; ?>
            </div>
        </nav>
    </header>
    <!-- Rest of your existing HTML -->
</body>
</html> 