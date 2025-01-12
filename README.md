

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
```txt
SMTP_NAME=smtp_config_1.txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=First Sender
FROM_EMAIL=Your Gmail address

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=First Sender
FROM_EMAIL=Your Gmail address

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=Your Gmail address
SMTP_PASS=Your app-specific Gmail password
SMTP_FROM_NAME=First Sender
FROM_EMAIL=Your Gmail address


```

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

```
---

🔑 Dynamic Shortcodes Reference with Shortcode	Description

for auto generate Customer’s unique account ID use this short code
```txt
{ account_id }
```
for auto generate Order identification number use this short code
```txt
{ order_id }
```
for auto generate Date of purchase use this short code
```txt
{ purchase_date }
```
for auto generate Invoice number for the order use this short code
```txt
{ invoice_number }
```
for auto generate Purchased product’s name
```txt
{ product_name }
```
for auto generate Number of items purchased
```txt
{ product_quantity }
```

for auto generate Price per item
```txt
{ product_price }

```
for auto generate Total purchase amount
```txt
{ total_price }

```
for auto generate Payment method used
```txt
{ payment_method 

```
for auto generate Payment processing date
```txt
{ payment_date }

```
for auto generate Customer's email address
```txt
{ recipient_email }

```	

---

🧪 Testing the Template

1. Send a test email using the dynamic template.


2. Verify if all placeholders are replaced with actual values.


To generate a sample CSV file for your email-sending application, follow this simple tutorial. This file will contain the recipient email addresses in the correct format.

Step 1: CSV File Format
For your application, the CSV should have a header row and email addresses listed below it.

Example:

```csv

email
john.doe@example.com
jane.smith@example.com
alex.brown@example.com
```
Step 2: Creating the CSV File
Option 1: Using Excel or Google Sheets
Open Excel or Google Sheets.
In the first cell (A1), type email.
Enter recipient emails below it (A2, A3, etc.).
Export/Download the file as a .csv file.
In Excel: File → Save As → Choose CSV (Comma delimited).
In Google Sheets: File → Download → Comma-separated values (.csv).
Option 2: Using a Text Editor
Open Notepad (Windows) or TextEdit (Mac).

Paste this content:

```csv
email
john.doe@example.com
jane.smith@example.com
alex.brown@example.com
```
Save the file as recipients.csv.

In Notepad: File → Save As → Select All Files → Save as recipients.csv.
Step 3: Uploading the CSV to the Application
Open your web app.
Navigate to the Upload Recipients section.
Click Upload and select the recipients.csv file.
Once uploaded, it will be used to send emails to the listed addresses.



---

🎬 Conclusion

You've learned how to:

Set up single and multiple SMTP configurations using Gmail.

Create and use dynamic shortcodes in your email templates.
To generate a sample CSV file for your email-sending application

If this tutorial helped you, like, share, and subscribe to Coding_with_p2ilab for more tech content!


---

📲 Connect with Us

YouTube: Coding_with_p2ilab

Email: admin@p2ilab.com

Location: 74 Belford Avenue, Bay Shore, NY 11706

Social Media: Facebook | Twitter | LinkedIn



---

© 2024 Pie-Mailer . All rights reserved.


---


