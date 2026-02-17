#!/bin/bash

# Deployment script for Country Club Way to Vercel

echo "🚀 Starting deployment to Vercel..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "Install it with: npm install -g vercel"
    exit 1
fi

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Country Club Way official website"
    echo "✅ Git repository initialized"
    echo ""
fi

# Deploy frontend to Vercel
echo "📤 Deploying frontend to Vercel..."
cd frontend

# Check if this is first deployment
if [ ! -f ".vercel/project.json" ]; then
    echo "This appears to be your first deployment."
    echo "Please follow the prompts to configure your project."
    echo ""
    vercel --prod
else
    vercel --prod
fi

cd ..

echo ""
echo "✅ Frontend deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set up MongoDB Atlas at https://www.mongodb.com/cloud/atlas"
echo "2. Deploy backend (see DEPLOYMENT.md for options)"
echo "3. Update VITE_API_URL in Vercel frontend environment variables"
echo "4. Test the live site!"
echo ""
echo "📖 Full deployment guide: see DEPLOYMENT.md"
