# Country Club Way - Official Website

A single-page luxury real estate marketing site built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Single-page responsive design with smooth scrolling
- Interactive Plan A/Plan B tabs with animations
- PDF document downloads
- Contact form with MongoDB integration
- Security features (Helmet, CORS, Rate Limiting)
- Modern UI with Tailwind CSS and Framer Motion

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Zod for validation
- Security middleware (Helmet, CORS, Rate Limiting)

## Project Structure

```
country-club-way_official/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── Lead.js
│   │   ├── routes/
│   │   │   └── leads.js
│   │   └── middleware/
│   │       ├── errorHandler.js
│   │       └── rateLimit.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TopBar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Welcome.jsx
│   │   │   ├── Townhomes.jsx
│   │   │   ├── Documents.jsx
│   │   │   ├── ScheduleTour.jsx
│   │   │   └── Footer.jsx
│   │   ├── lib/
│   │   │   └── api.js
│   │   ├── assets/
│   │   │   ├── hero.jpg
│   │   │   ├── planA.jpg
│   │   │   └── planB.jpg
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   └── docs/
│   │       ├── plat-map.pdf
│   │       ├── ccrs.pdf
│   │       ├── public-report.pdf
│   │       └── more-information.pdf
│   ├── package.json
│   └── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository or extract the project files

2. Set up the backend:
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
```

3. Set up the frontend:
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env if using a different API URL
```

### Running the Application

1. Start MongoDB (if running locally):
```bash
# On macOS with Homebrew:
brew services start mongodb-community

# Or using mongod directly:
mongod --dbpath /path/to/data/directory
```

2. Start the backend server:
```bash
cd backend
npm run dev
```
The backend will run on http://localhost:5000

3. Start the frontend development server (in a new terminal):
```bash
cd frontend
npm run dev
```
The frontend will run on http://localhost:5173

4. Open your browser and navigate to http://localhost:5173

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/country-club-way
PORT=5000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## API Endpoints

### POST /api/leads
Submit a new lead form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(480) 555-1234",
  "address": "123 Main St, Tempe, AZ",
  "message": "I'm interested in Plan A"
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Lead submitted successfully"
}
```

### GET /api/health
Health check endpoint

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```
The build output will be in `frontend/dist`

### Backend
```bash
cd backend
npm start
```

## Deployment to Vercel

### Frontend Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy the frontend:
```bash
cd frontend
vercel --prod
```

3. Configure environment variables in Vercel dashboard:
   - `VITE_API_URL` = Your backend URL

### Backend Deployment

You can deploy the backend to:
- Vercel (as serverless functions)
- Heroku
- Railway
- DigitalOcean
- AWS

Make sure to:
1. Set up environment variables
2. Use a cloud MongoDB instance (MongoDB Atlas recommended)
3. Update CORS_ORIGIN to match your frontend URL

## Features Overview

### Single-Page Sections

1. **Top Bar** - Sticky navigation with brand and contact info
2. **Hero** - Full-screen hero image with call-to-action
3. **Welcome** - Introduction to Country Club Way
4. **Townhomes** - Interactive tabs for Plan A and Plan B with features and specifications
5. **Documents & Resources** - Downloadable PDF documents
6. **Schedule a Tour** - Contact form that saves to MongoDB
7. **Footer** - Company info and social links

### Interactive Elements

- Smooth scroll navigation
- Animated section transitions with Framer Motion
- Tab switching between floor plans
- Form validation and submission
- PDF download functionality

## License

All rights reserved.

## Contact

For inquiries, please visit the contact form on the website or email info@countryclubway.com
