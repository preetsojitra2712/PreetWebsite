# Formspree Setup Guide (RECOMMENDED - Easiest Solution!)

Formspree is the easiest way to make your contact form send emails directly to **psoji001@ucr.edu**.

## Quick Setup (5 minutes):

### Step 1: Sign Up
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email (use psoji001@ucr.edu or any email)
4. Verify your email address

### Step 2: Create a Form
1. After logging in, click **"New Form"**
2. Give it a name like "Portfolio Contact Form"
3. Set the **Email To** field to: `psoji001@ucr.edu`
4. Click **"Create Form"**

### Step 3: Get Your Form Endpoint
1. After creating the form, you'll see your **Form Endpoint URL**
2. It looks like: `https://formspree.io/f/YOUR_FORM_ID`
3. **Copy this URL**

### Step 4: Update Your Code
1. Open `assets/js/script.js`
2. Find this line (around line 127):
   ```javascript
   const FORMSPREE_ENDPOINT = ""; // Paste your Formspree endpoint here
   ```
3. Paste your Formspree endpoint URL between the quotes:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
4. Save the file

### Step 5: Test It!
1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email at **psoji001@ucr.edu** - you should receive the message!

## That's It! 🎉

Your form will now send emails directly to your inbox. No backend code needed!

## Free Plan Limits:
- 50 submissions per month (free)
- Upgrade for more if needed

## Troubleshooting:
- Make sure you copied the full endpoint URL
- Check that the email in Formspree settings is set to `psoji001@ucr.edu`
- Check your spam folder if emails don't arrive
- Check browser console (F12) for any errors

