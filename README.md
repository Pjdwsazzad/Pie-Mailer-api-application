To make it easier for users to auto-copy necessary configurations directly from the GitHub README, you can use code blocks with a "Copy" button that GitHub provides for code snippets. Below is how you can structure the GitHub README using bash code blocks for copying.


---

📧 Pie-Mailer-Tutorial

Pie Mailer is a robust, high-performance email automation tool designed to send bulk emails efficiently with custom SMTP configurations. Ideal for marketing campaigns, notifications, and mailing lists, this tool allows seamless email delivery with powerful features for tracking, error logging, and concurrency management.


---

🚀 Features

Single and Multiple SMTP Configurations

Email Tracking with Tracking Pixel

Error Logging and Concurrency Management

Dynamic Shortcode Integration for Email Templates



---

🛠️ Setup Instructions

1️⃣ Single SMTP Configuration

Copy and paste the following configuration into a file named smtp_config.txt:

SMTP_NAME=smtp_config.txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM_NAME=Your Display Name
FROM_EMAIL=your_email@gmail.com

📥 Auto Copy Command:
Run this command in your terminal to auto-generate the file:

echo "SMTP_NAME=smtp_config.txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM_NAME=Your Display Name
FROM_EMAIL=your_email@gmail.com" > smtp_config.txt


---

2️⃣ Multiple SMTP Configurations

For multiple SMTP setups, use the following format in smtp_config.txt:

# SMTP Config 1
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=first_email@gmail.com
SMTP_PASS=first_app_password
SMTP_FROM_NAME=First Sender
FROM_EMAIL=first_email@gmail.com

# SMTP Config 2
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=second_email@gmail.com
SMTP_PASS=second_app_password
SMTP_FROM_NAME=Second Sender
FROM_EMAIL=second_email@gmail.com

📥 Auto Copy Command:
Run this command to create a multiple SMTP configuration file:

echo "# SMTP Config 1
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=first_email@gmail.com
SMTP_PASS=first_app_password
SMTP_FROM_NAME=First Sender
FROM_EMAIL=first_email@gmail.com

# SMTP Config 2
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=second_email@gmail.com
SMTP_PASS=second_app_password
SMTP_FROM_NAME=Second Sender
FROM_EMAIL=second_email@gmail.com" > smtp_config.txt


---

3️⃣ Dynamic Email Template with Shortcodes

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

  <h2>Product Details</h2>
  <p>Product Name: { product_name }</p>
  <p>Quantity: { product_quantity }</p>
  <p>Total Price: ${ total_price }</p>

  <footer>
    <p>This is a system-generated email. Please do not reply.</p>
  </footer>
</body>
</html>


---

🎥 Video Tutorials

📺 SMTP Configuration Tutorial (Single & Multiple Setups)
🔗 Watch on YouTube

📺 Dynamic Email Templates with Shortcodes
🔗 Watch on YouTube


---

📄 License

MIT License


---

🔗 Follow Us

YouTube: Coding_with_p2ilab
GitHub: p2ilab


---

By using bash code blocks, users can easily copy the configuration directly from GitHub using the built-in "Copy" button next to the code. Let me know if you'd like to expand this setup or add more sections!

