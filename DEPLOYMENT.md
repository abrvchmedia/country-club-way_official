# Deployment Guide for Country Club Way

This guide covers deploying the Country Club Way website to Vercel and setting up the backend.

## Prerequisites

- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas account for cloud database (https://www.mongodb.com/cloud/atlas)
- Vercel CLI installed: `npm install -g vercel`

## Step 1: Set Up MongoDB Atlas (Free Tier)

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free tier is sufficient)
3. Create a database user with password
4. Whitelist all IP addresses (0.0.0.0/0) for development
5. Get your connection string (it will look like):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/country-club-way
   ```

## Step 2: Deploy Frontend to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   ```bash
   cd country-club-way_official
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create country-club-way_official --public --source=. --push
   ```

2. Go to https://vercel.com/dashboard
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: npm run build
   - **Output Directory**: dist
   
6. Add Environment Variables:
   - `VITE_API_URL` = (your backend URL - see Step 3)

7. Click "Deploy"

### Option B: Deploy via CLI

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

3. Follow prompts and configure as needed

4. Set environment variable:
   ```bash
   vercel env add VITE_API_URL production
   ```
   Enter your backend URL when prompted

## Step 3: Deploy Backend

You have several options for deploying the backend:

### Option A: Vercel Serverless (Recommended for this project)

1. Create `api` directory in backend:
   ```bash
   cd backend
   mkdir api
   ```

2. Create `api/index.js`:
   ```javascript
   import app from '../server.js';
   export default app;
   ```

3. Update `backend/vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "api/index.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "api/index.js"
       }
     ]
   }
   ```

4. Deploy:
   ```bash
   cd backend
   vercel --prod
   ```

5. Set environment variables in Vercel dashboard:
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `CORS_ORIGIN` = Your frontend Vercel URL
   - `NODE_ENV` = production

### Option B: Railway (Alternative)

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set root directory to `backend`
5. Add environment variables (same as above)
6. Railway will auto-deploy

### Option C: Render (Alternative)

1. Go to https://render.com
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: backend
   - **Build Command**: npm install
   - **Start Command**: npm start
5. Add environment variables
6. Click "Create Web Service"

## Step 4: Update Frontend Environment Variable

After deploying the backend:

1. Copy your backend URL (e.g., `https://your-backend.vercel.app`)
2. Update the frontend's `VITE_API_URL` environment variable in Vercel:
   - Go to your frontend project in Vercel
   - Settings → Environment Variables
   - Edit `VITE_API_URL` and paste your backend URL
   - Redeploy the frontend

## Step 5: Test the Deployment

1. Visit your frontend URL
2. Test the "Schedule a Tour" form
3. Verify the form submits successfully
4. Check MongoDB Atlas to confirm the lead was saved

## Environment Variables Summary

### Frontend (Vercel)
- `VITE_API_URL` = Your backend URL (e.g., https://your-backend.vercel.app)

### Backend (Vercel/Railway/Render)
- `MONGODB_URI` = Your MongoDB Atlas connection string
- `PORT` = 5000 (or let the platform assign)
- `CORS_ORIGIN` = Your frontend Vercel URL
- `NODE_ENV` = production

## Custom Domain (Optional)

### Add Custom Domain to Frontend

1. In Vercel dashboard, go to your frontend project
2. Settings → Domains
3. Add your custom domain (e.g., countryclubway.com)
4. Follow DNS configuration instructions
5. Update backend's `CORS_ORIGIN` to include your custom domain

## Monitoring and Maintenance

- **Vercel**: Check deployment logs in the dashboard
- **MongoDB Atlas**: Monitor database usage in Atlas dashboard
- **Logs**: Use Vercel's log viewer to debug issues

## Troubleshooting

### CORS Errors
- Ensure backend `CORS_ORIGIN` matches your frontend URL exactly
- Include protocol (https://) in the URL

### Form Not Submitting
- Check backend logs for errors
- Verify `VITE_API_URL` is set correctly
- Test backend health endpoint: `https://your-backend.vercel.app/api/health`

### Database Connection Fails
- Verify MongoDB Atlas connection string is correct
- Check that IP whitelist includes 0.0.0.0/0
- Ensure database user has correct permissions

## Rollback

If you need to rollback a deployment:

1. Go to Vercel dashboard
2. Select your project
3. Go to "Deployments"
4. Find the previous working deployment
5. Click the three dots → "Promote to Production"

## Continuous Deployment

Once set up with GitHub:
- Every push to main branch triggers automatic deployment
- Pull requests create preview deployments
- Failed deployments don't affect production

## Cost Estimate

- **Vercel**: Free tier includes 100 GB bandwidth/month
- **MongoDB Atlas**: Free tier includes 512 MB storage
- **Railway/Render**: Free tier available with limitations

This should be sufficient for a marketing site with moderate traffic.
