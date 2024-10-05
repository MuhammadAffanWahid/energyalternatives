<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    // Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set the recipient email address
        $to = "zabaidafashion@gmail.com"; // Change this to your email address

        // Set the email subject and message
        $subject = "New Subscription";
        $message = "New subscription from: " . $email;

        // Set the headers
        $headers = "From: noreply@yourdomain.com"; // Change this to a valid email address

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo "Subscription successful!";
        } else {
            echo "There was a problem sending the email.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request.";
}
?>
