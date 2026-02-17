# Quick Start Guide

## Deploy to Vercel in 5 Minutes

### Step 1: Push to GitHub

```bash
# Create GitHub repository (requires GitHub CLI)
gh repo create country-club-way_official --public --source=. --push
```

Or manually:
1. Create a new repository on GitHub.com named "country-club-way_official"
2. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/country-club-way_official.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy Frontend to Vercel

**Option A: Via Vercel Dashboard (Easiest)**

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Set **Root Directory** to: `frontend`
4. Click **Deploy**
5. After deployment, add environment variable:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-url.vercel.app` (add this after Step 3)

**Option B: Via Vercel CLI**

```bash
cd frontend
vercel --prod
```

### Step 3: Set Up Backend

**Easiest: Use Railway (Free)**

1. Sign up at https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `country-club-way_official`
4. Set **Root Directory** to: `backend`
5. Add environment variables:
   - `MONGODB_URI`: Get from MongoDB Atlas (see below)
   - `CORS_ORIGIN`: Your frontend Vercel URL
   - `NODE_ENV`: `production`
6. Copy your Railway backend URL

### Step 4: Set Up MongoDB Atlas (Free)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist all IPs: `0.0.0.0/0`
5. Get connection string:
   ```
   mongodb+srv://username:password@cluster.xxxxx.mongodb.net/country-club-way
   ```
6. Add this to your backend environment variables

### Step 5: Connect Frontend to Backend

1. Go to Vercel dashboard → Your frontend project
2. Settings → Environment Variables
3. Edit `VITE_API_URL` with your backend URL
4. Redeploy frontend

### Step 6: Test

Visit your Vercel URL and test the "Schedule a Tour" form!

## Local Development

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
```

Visit http://localhost:5173

## Need Help?

- Read the full README.md for detailed information
- Check DEPLOYMENT.md for comprehensive deployment guide
- Common issues: Make sure CORS_ORIGIN matches your frontend URL exactly
