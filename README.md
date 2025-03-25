# leaflet_map_application
# Project Overview
This project consists of a frontend and a backend. The frontend is built with React (Vite) and the backend uses Node.js and Express.

Prerequisites

Make sure you have the following installed on your system:
Node.js (v20.12.2 or higher)

npm or yarn

MongoDB (if required)

📦 Installation

1. Clone the Repository

git clone https://github.com/your-repo.git
cd map_leaflet_app

2. Install Dependencies

For Backend:

cd backend
npm install

For Frontend:

cd ../frontend
npm install

🚀 Running the Application

1. Start MongoDB (if applicable)

Make sure MongoDB is running:

mongod

2. Configure Environment Variables

Create a .env file in both frontend and backend with appropriate environment variables.

Example for Backend (backend/.env):

PORT=3000
MONGO_URI=mongodb://localhost:27017/mapDB
JWT_SECRET=your_secret_key

Example for Frontend (frontend/.env):

VITE_BACKEND_URL=http://localhost:5000

3. Start Backend Server

cd backend
npm start

The backend will run at http://localhost:5000

4. Start Frontend Server

cd ../frontend
npm run dev

The frontend will run at http://localhost:5173

⚙️ API Endpoints

Authentication

POST /api/login - Login User

POST /api/register - Register User

Dashboard

GET /api/dashboard - Get Card Data

Map View

GET /api/map - Get Map Data

🛠 Troubleshooting

CORS Error: Ensure CORS is enabled in the backend using cors middleware.

Server Crash: Check for missing .env variables.

MongoDB Error: Ensure MongoDB is running using mongod.
