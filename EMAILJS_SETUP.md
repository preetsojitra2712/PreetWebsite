# EmailJS Setup Guide

Your contact form is now configured to send emails to **psoji001@ucr.edu** using EmailJS.

## Quick Setup Steps:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (100 emails/month free)

### 2. Add Email Service
- Go to **Email Services** in the dashboard
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- **Copy your Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use this template structure:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

- Set **To Email** to: `psoji001@ucr.edu`
- **Copy your Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Your Public Key
- Go to **Account** → **General** in the dashboard
- **Copy your Public Key** (e.g., `xxxxxxxxxxxxx`)

### 5. Update the Code
Open `assets/js/script.js` and replace these values:

```javascript
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox at `psoji001@ucr.edu`
4. You should receive the message!

## Troubleshooting
- Make sure all three IDs are correctly entered
- Check the browser console for any error messages
- Verify your EmailJS service is connected properly
- Ensure your email template has the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

