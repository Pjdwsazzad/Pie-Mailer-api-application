# Pie-Mailer-Tutorial
Pie Mailer is a robust, high-performance email automation tool designed to send bulk emails efficiently with custom SMTP configurations. Ideal for marketing campaigns, notifications, and mailing lists, this tool allows seamless email delivery with powerful features for tracking, error logging, and concurrency management.

Video Tutorial Script: Setting Up Single and Multiple SMTP Configurations with Gmail

“SMTP Configuration Tutorial - Single & Multiple Setups | Gmail Demo”

"Welcome to this tutorial on setting up single and multiple SMTP configurations using Gmail. In this video, we'll guide you through the process step-by-step using Notepad."



Part 1: Setting Up a Single SMTP Configuration

Open Notepad.

"Let's begin by setting up a single SMTP configuration."

Typing the following into Notepad:

SMTP_NAME=smtp_config.txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address.
SMTP_PASS= Your app-specific Gmail password.
SMTP_FROM_NAME=The sender's display name.
FROM_EMAIL=Your Gmail address.

"Here’s the breakdown:

SMTP_NAME: The filename where this configuration is saved.

SMTP_HOST: Gmail’s SMTP server.

SMTP_PORT: Port 587 for TLS.

SMTP_SECURE: Set to false for TLS (true for SSL).

SMTP_USER: Your Gmail address.

SMTP_PASS: Your app-specific Gmail password.

SMTP_FROM_NAME: The sender's display name.

FROM_EMAIL: The email address used to send emails."



Click on "File" > "Save As".
File Name: smtp_config.txt
Save as type: All Files

"Now, save this file as smtp_config.txt."


---

Part 2: Setting Up Multiple SMTP Configurations

Open a new Notepad window.

"Next, let's configure multiple SMTP setups in the same file."

Typing the following into Notepad:

SMTP_NAME=smtp_config.txt
SMTP_USER=Your Gmail address.
SMTP_PASS= Your app-specific Gmail password.
SMTP_FROM_NAME=The sender's display name.
FROM_EMAIL=Your Gmail address

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address.
SMTP_PASS= Your app-specific Gmail password.
SMTP_FROM_NAME=The sender's display name.
FROM_EMAIL=Your Gmail address

"For multiple configurations, simply add another set of SMTP settings below the first. Each setup should include the same keys but with different values as needed."

Save the file as smtp_config.txt again.

"Save the file, and now both configurations are ready for use."
:
“That’s it! You’ve successfully set up single and multiple SMTP configurations.”

"That's how you configure single and multiple SMTP settings using Gmail. If you found this tutorial helpful, don’t forget to like, share, and subscribe to Coding_with_p2ilab for more tech tutorials."


“Subscribe for more tutorials | Coding_with_p2ilab




---------------------------------

Video Tutorial: How to Use Dynamic Shortcodes for Email Templates


---


“Dynamic Email Template Tutorial | Shortcode Integration”


---

Part 1: Introduction to Dynamic Shortcodes

"Welcome to this tutorial on how to use dynamic shortcodes in your email templates. In this video, we’ll show you how to create a custom email template using dynamic placeholders that our system will auto-generate values for. By the end of this video, you’ll know exactly how to personalize your email templates and use shortcodes effectively."


---

Part 2: Understanding Shortcodes

"First, let’s understand what shortcodes are. Shortcodes are placeholders that our system will replace with real values when the email is sent. For example, we have the following shortcodes in an order confirmation email template."


Display of the following email template with shortcodes:

Order Confirmation
Thank you for your purchase!

Dear Customer, [{ account_id }]

We’re happy to let you know that your order has been confirmed. Here are the details:

Order Information
Order ID: { order_id }

Account ID: { account_id }

Purchase Date: { purchase_date }

Invoice Number: { invoice_number }

Product Details
Product Name: { product_name }

Quantity: { product_quantity }

Price per Item: ${ product_price }

Total Price: ${ total_price }

Payment Information
Payment Method: { payment_method }

Payment Confirmation ID: { payment_confirmation_id }

Payment Date: { payment_date }

If you did not authorize this transaction, please contact our support team immediately at Phone: +1 (252) 525-4559.

Thank you for choosing Costco Center!

Unsubscribe: If you wish to unsubscribe from future communications, click here.

This email was sent to { recipient_email }.

This is a system-generated email. Please do not reply to this email.

Costco Center
Your Trusted Wholesale Partner

Email: info@costcocenter.com

5437 Costco Blvd, Suite 100, Bayshore, New York, 11706

Facebook | Twitter | LinkedIn
© 2024 Costco Center. All rights reserved.


---

Part 3: List of Dynamic Shortcodes and Placeholders


"Now, let’s go over the list of all available shortcodes and their corresponding placeholders."


Display of a list of shortcodes:

{ account_id }: The unique ID of the customer's account.

{ order_id }: The order ID of the purchase.

{ purchase_date }: The date when the purchase was made.

{ invoice_number }: The unique invoice number for the transaction.

{ product_name }: The name of the product purchased.

{ product_quantity }: The quantity of the product purchased.

{ product_price }: The price per individual product.

{ total_price }: The total price for the purchased products.

{ payment_method }: The method used for payment (e.g., credit card, PayPal).

{ payment_confirmation_id }: The unique ID for payment confirmation.

{ payment_date }: The date when the payment was made.

{ recipient_email }: The recipient's email address.



---

Part 4: How to Use Shortcodes in Your Email Template


"Now, let's create your custom email template using these shortcodes."


Show the user typing the email template in HTML format with placeholders:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
</head>
<body>
  <h1>Order Confirmation</h1>
  <p>Thank you for your purchase!</p>

  <p>Dear Customer, [{ account_id }] </p>

  <p>We’re happy to let you know that your order has been confirmed. Here are the details:</p>

  <h2>Order Information</h2>
  <p>Order ID: { order_id }</p>
  <p>Account ID: { account_id }</p>
  <p>Purchase Date: { purchase_date }</p>
  <p>Invoice Number: { invoice_number }</p>

  <h2>Product Details</h2>
  <p>Product Name: { product_name }</p>
  <p>Quantity: { product_quantity }</p>
  <p>Price per Item: ${ product_price }</p>
  <p>Total Price: ${ total_price }</p>

  <h2>Payment Information</h2>
  <p>Payment Method: { payment_method }</p>
  <p>Payment Confirmation ID: { payment_confirmation_id }</p>
  <p>Payment Date: { payment_date }</p>

  <p>If you did not authorize this transaction, please contact our support team immediately at Phone: +1 (252) 525-4559.</p>

  <p>Thank you for choosing Costco Center!</p>

  <p><a href="#">Unsubscribe</a> - If you wish to unsubscribe from future communications, click here.</p>

  <p>This email was sent to { recipient_email }.</p>

  <p>This is a system-generated email. Please do not reply to this email.</p>

  <footer>
    <p>Costco Center</p>
    <p>Your Trusted Wholesale Partner</p>
    <p>Email: info@costcocenter.com</p>
    <p>5437 Costco Blvd, Suite 100, Bayshore, New York, 11706</p>
    <p>Facebook | Twitter | LinkedIn</p>
    <p>&copy; 2024 Costco Center. All rights reserved.</p>
  </footer>
</body>
</html>

Voiceover:
"In this example, you can see that we’ve inserted the shortcodes in various parts of the email template, such as the order ID, product details, payment method, and recipient email. These values will be dynamically replaced by our system when the email is sent."


---

Part 5: Testing Your Template

Voiceover:
"Once you've created your template, you can test it to ensure that the system is correctly replacing the shortcodes with the actual values. Simply send a test email, and verify that all placeholders are being replaced correctly with real data."


---

[On-Screen Text]:
“That’s it! You’ve learned how to use dynamic shortcodes in your email templates.”

Voiceover:
"That’s all for this tutorial. You've now learned how to use dynamic shortcodes in your email templates to personalize them. If you have any questions, feel free to reach out to our support team."

[Outro Music]

[On-Screen Text]:
“Thanks for watching! | Coding_with_p2ilab”


---

End of Tutorial
