# Deploy Your Portfolio Website - Step by Step Guide

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Create a New GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `portfolio` or `sojitra-preet-portfolio` (or any name you like)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### Step 2: Update Your Git Remote
After creating the repository, GitHub will show you commands. Use these:

```bash
# Remove the old remote
git remote remove origin

# Add your new repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Example:
# git remote add origin https://github.com/preetsojitra2712/portfolio.git
```

### Step 3: Commit and Push Your Changes
```bash
# Add all your changes
git add .

# Commit with a message
git commit -m "Update portfolio with personal information"

# Push to your new repository
git push -u origin master
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"Deploy from a branch"**
5. Select **"master"** branch and **"/ (root)"** folder
6. Click **Save**
7. Wait 1-2 minutes, then your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Option 2: Netlify (Easiest - Drag & Drop)

### Step 1: Go to Netlify
1. Visit [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up for free (use GitHub to sign in - easiest way)

### Step 2: Deploy
1. Click **"Add new site"** → **"Deploy manually"**
2. Drag and drop your entire `vcard-personal-portfolio` folder
3. Wait for deployment (takes ~30 seconds)
4. Your site is live! You'll get a URL like: `https://random-name-12345.netlify.app`

### Step 3: Custom Domain (Optional)
- You can change the site name in Site settings
- Or add your own custom domain

---

## Quick Commands for GitHub Pages:

```bash
# 1. Remove old remote
git remote remove origin

# 2. Add your new repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 3. Commit and push
git add .
git commit -m "Deploy portfolio website"
git push -u origin master
```

Then enable GitHub Pages in repository settings!

---

## Need Help?
- GitHub Pages: [https://pages.github.com/](https://pages.github.com/)
- Netlify: [https://www.netlify.com/](https://www.netlify.com/)

