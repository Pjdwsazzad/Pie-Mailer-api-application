Here’s a complete GitHub README.md file based on your tutorial content. It includes proper formatting, code blocks with syntax highlighting, and structured sections for clarity.


---

📧 SMTP Configuration & Dynamic Email Templates

Welcome to this guide on setting up Single and Multiple SMTP Configurations with Gmail and using Dynamic Shortcodes for personalized email templates. Follow the step-by-step instructions below!


---

🎥 Video Tutorial

Title: SMTP Configuration Tutorial - Single & Multiple Setups | Gmail Demo
Channel: Coding_with_p2ilab


---

⚙️ Part 1: Setting Up a Single SMTP Configuration

1. Open Notepad

2. Paste the following configuration:
```txt
SMTP_NAME=smtp_config.txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=The sender's display name
FROM_EMAIL=Your Gmail address
```
🔍 Explanation:

SMTP_NAME: The filename for this configuration.

SMTP_HOST: Gmail’s SMTP server.

SMTP_PORT: Port 587 (for TLS).

SMTP_SECURE: false for TLS, true for SSL.

SMTP_USER: Your Gmail address.

SMTP_PASS: Your app-specific Gmail password.

SMTP_FROM_NAME: Display name for the sender.

FROM_EMAIL: The email used for sending messages.


💾 Save the File:

Click File → Save As

Filename: smtp_config.txt

Save as type: All Files



---

⚙️ Part 2: Setting Up Multiple SMTP Configurations

1. Open a new Notepad window

2. Paste the following configuration for multiple SMTP setups:

# First SMTP Configuration
SMTP_NAME=smtp_config_1.txt
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=First Sender
FROM_EMAIL=Your Gmail address

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# Second SMTP Configuration
SMTP_NAME=smtp_config_2.txt
SMTP_USER=Another Gmail address
SMTP_PASS=Another app-specific Gmail password
SMTP_FROM_NAME=Second Sender
FROM_EMAIL=Another Gmail address

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

💾 Save the File:

Filename: smtp_config.txt


📢 Each configuration block can be customized with different accounts or display names.


---

📨 Part 3: Using Dynamic Shortcodes in Email Templates

Dynamic shortcodes personalize email content by replacing placeholders with actual data when sending emails.

📝 Example Email Template with Shortcodes:
```html
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

  <p>Dear Customer, [{ account_id }]</p>

  <h2>Order Information</h2>
  <p>Order ID: { order_id }</p>
  <p>Purchase Date: { purchase_date }</p>
  <p>Invoice Number: { invoice_number }</p>

  <h2>Product Details</h2>
  <p>Product Name: { product_name }</p>
  <p>Quantity: { product_quantity }</p>
  <p>Price per Item: ${ product_price }</p>
  <p>Total Price: ${ total_price }</p>

  <h2>Payment Information</h2>
  <p>Payment Method: { payment_method }</p>
  <p>Payment Date: { payment_date }</p>

  <p>If you did not authorize this transaction, please contact support.</p>

  <footer>
    <p>&copy; 2024 Costco Center. All rights reserved.</p>
  </footer>
</body>
</html>


---

🔑 Dynamic Shortcodes Reference


---

🧪 Testing the Template

1. Send a test email using the dynamic template.


2. Verify if all placeholders are replaced with actual values.




---

🎬 Conclusion

You've learned how to:

Set up single and multiple SMTP configurations using Gmail.

Create and use dynamic shortcodes in your email templates.


If this tutorial helped you, like, share, and subscribe to Coding_with_p2ilab for more tech content!


---

📲 Connect with Us

YouTube: Coding_with_p2ilab

Email: info@costcocenter.com

Location: 5437 Costco Blvd, Suite 100, Bayshore, NY, 11706

Social Media: Facebook | Twitter | LinkedIn



---

© 2024 Costco Center. All rights reserved.


---

This README is fully formatted for GitHub and will display the copy button for all code blocks. Let me know if you'd like any changes!
