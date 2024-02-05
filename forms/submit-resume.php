<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $resume = $_FILES['resume'];
    $message = $_POST['message'] ?? '';

    // Process the uploaded resume and save it to the server
    // You can also send the form data to your email or store it in a database

    // Example response
    $response = [
        'status' => 'success',
        'message' => 'Resume received successfully.', 