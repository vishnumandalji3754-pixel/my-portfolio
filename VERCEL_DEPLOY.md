# How to Deploy vishnu.dev on Vercel

Your portfolio is fully configured for Vercel deployment with:
- Zero-config static hosting
- `vercel.json` with clean URLs and fast CDN cache-control headers
- `.gitignore` configured to prevent junk files
- Pre-initialized Git repository

---

## 🚀 Method 1: Deploy via GitHub (Recommended — Takes 2 Minutes)

This method gives you automatic live deployments whenever you make changes.

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new) and log in.
2. Repository name: `portfolio` (or `vishnu-dev-portfolio`).
3. Set visibility to **Public**.
4. Leave "Initialize with README" **unchecked** (we already have a complete repo).
5. Click **"Create repository"**.

### Step 2: Push your code to GitHub
Open your terminal in `C:\Users\LENOVO\.gemini\antigravity\scratch\portfolio` and run:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)*

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..." > "Project"**.
3. Select your `portfolio` repository from the list and click **"Import"**.
4. Keep the default settings (Framework Preset: **Other** / Root Directory: `./`).
5. Click **"Deploy"**.

Within 30 seconds, Vercel will give you a live production URL like:
👉 `https://vishnu-dev-portfolio.vercel.app`

---

## ⚡ Method 2: Deploy Directly via Vercel CLI (No GitHub required)

If you have Node.js installed, you can deploy in one command from your terminal:

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Inside the `portfolio` folder, run:
   ```bash
   vercel
   ```

3. Follow the quick terminal prompts:
   - `Set up and deploy?` -> **Y**
   - `Which scope?` -> (Press Enter)
   - `Link to existing project?` -> **N**
   - `What’s your project’s name?` -> `vishnu-dev`
   - `In which directory is your code located?` -> `./`

4. For production release:
   ```bash
   vercel --prod
   ```

---

## 🌐 Custom Domain (Optional)
To link your own custom domain (e.g. `vishnu.dev`):
1. Go to your project on the Vercel Dashboard.
2. Click **Settings > Domains**.
3. Enter your domain name and follow the DNS instructions (CNAME / A record).
