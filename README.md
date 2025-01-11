Pie-Mailer-Tutorial

Pie Mailer is a robust, high-performance email automation tool designed to send bulk emails efficiently with custom SMTP configurations. It is ideal for marketing campaigns, notifications, and mailing lists, offering seamless email delivery with advanced features for tracking, error logging, and concurrency management.

🔥 Key Features

Custom SMTP Configuration: Easily set up single or multiple SMTP servers.

Bulk Email Sending: Efficiently handle high-volume email campaigns.

Email Tracking: Track email opens and delivery status.

Error Logging: Identify and resolve sending issues quickly.

Concurrency Management: Optimize email delivery with controlled concurrency.



---

📹 Video Tutorial: Setting Up Single and Multiple SMTP Configurations with Gmail

Title: SMTP Configuration Tutorial - Single & Multiple Setups | Gmail Demo
Channel: Coding_with_p2ilab

Part 1: Single SMTP Configuration

1. Open Notepad and enter the following configuration:

SMTP_NAME=smtp_config.txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=The sender's display name
FROM_EMAIL=Your Gmail address


2. Explanation:

SMTP_HOST: Gmail’s SMTP server.

SMTP_PORT: Port 587 for TLS.

SMTP_SECURE: false for TLS, true for SSL.

SMTP_USER: Your Gmail address.

SMTP_PASS: App-specific Gmail password.

SMTP_FROM_NAME: Sender's display name.

FROM_EMAIL: Email address used to send emails.



3. Save as: smtp_config.txt (All Files)




---

Part 2: Multiple SMTP Configurations

1. Open Notepad and enter multiple configurations:

SMTP_NAME=smtp_config.txt
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=The sender's display name
FROM_EMAIL=Your Gmail address

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your second Gmail address
SMTP_PASS=Your second app-specific Gmail password
SMTP_FROM_NAME=Another sender's display name
FROM_EMAIL=Your second Gmail address


2. Save the file as smtp_config.txt.



✅ You have successfully set up single and multiple SMTP configurations!


---

📹 Video Tutorial: How to Use Dynamic Shortcodes for Email Templates

Title: Dynamic Email Template Tutorial | Shortcode Integration
Channel: Coding_with_p2ilab

Part 1: Introduction to Dynamic Shortcodes

Dynamic shortcodes are placeholders in email templates that are automatically replaced with real values when emails are sent. This helps personalize emails for each recipient.


---

Part 2: Example Shortcodes in an Email Template

Sample Template:

Order Confirmation

Dear Customer, [{ account_id }]

Order ID: { order_id }  
Purchase Date: { purchase_date }  
Product Name: { product_name }  
Total Price: ${ total_price }  
Payment Method: { payment_method }  

This email was sent to { recipient_email }.

Common Shortcodes:

{ account_id }: Customer’s account ID

{ order_id }: Order ID

{ purchase_date }: Purchase date

{ product_name }: Product name

{ total_price }: Total purchase amount

{ payment_method }: Payment method used

{ recipient_email }: Recipient’s email address



---

Part 3: Creating a Dynamic HTML Email Template

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
</head>
<body>
  <h1>Order Confirmation</h1>
  <p>Dear Customer, [{ account_id }]</p>

  <h2>Order Details</h2>
  <p>Order ID: { order_id }</p>
  <p>Purchase Date: { purchase_date }</p>
  <p>Product: { product_name }</p>
  <p>Total: ${ total_price }</p>

  <h2>Payment Information</h2>
  <p>Method: { payment_method }</p>

  <p>This email was sent to { recipient_email }.</p>
</body>
</html>

🔎 Explanation:

The placeholders { order_id }, { product_name }, etc., will be dynamically replaced with actual data during email sending.



---

Part 4: Testing Your Template

1. Send a test email using Pie Mailer.


2. Verify if all shortcodes are correctly replaced with real data.



✅ You’ve successfully created a dynamic email template!



