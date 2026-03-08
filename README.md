# Leave Management System

## Project Overview

This is a basic Leave Management Web Application where employees can apply for leave and employers can review, approve, or reject those leave requests.

The system supports role-based access where employees can submit leave applications and track their status, while employers can view all leave requests and update their status.

---

## Tech Stack

Frontend  
Vue.js  
Tailwind CSS  

Backend  
Node.js  
Express.js  

Database  
MongoDB Atlas  

Authentication  
JWT (JSON Web Tokens)

Deployment  
Frontend: Vercel  
Backend: Render  

---

## Live Application

Frontend URL  

https://leave-management-system-flame.vercel.app/

Backend API URL  

https://leave-management-system-1-9wqx.onrender.com


---

## Features

Employee

- Signup and Login
- Apply for leave
- View leave status (Pending / Approved / Rejected)

Employer

- Signup and Login
- View all employee leave requests
- Approve or reject leave requests

---


---

## Setup Instructions

### 1 Clone Repository
git clone https://github.com/Mayurghule2/leave-management-system.git

cd leave-management-system


---

### 2 Backend Setup


cd backend
npm install


Create `.env` file


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend server


node server.js


Backend runs on


http://localhost:5000


---

### 3 Frontend Setup


cd frontend
npm install
npm run dev


Frontend runs on


http://localhost:5173


---

## API Endpoints

### Authentication

Signup


POST /api/auth/signup


Body


{
"name": "Mayur",
"email": "mayur@email.com
",
"password": "123456",
"role": "employee"
}


Login


POST /api/auth/login


---

### Employee APIs

Apply Leave


POST /api/leave/apply


Get My Leaves


GET /api/leave/my


---

### Employer APIs

Get All Leave Requests


GET /api/leave/all


Approve or Reject Leave


PUT /api/leave/update/:id


Body


{
"status": "Approved"
}


---

## Deployment Instructions

### Backend Deployment (Render)

1. Push backend code to GitHub
2. Create a new Web Service on Render
3. Configure:


Root Directory: backend
Build Command: npm install
Start Command: node server.js


4. Add Environment Variables


MONGO_URI
JWT_SECRET
PORT


---

### Frontend Deployment (Vercel)

1. Import project repository
2. Configure


Root Directory: frontend
Framework: Vue
Build Command: npm run build
Output Directory: dist


3. Update API base URL to deployed backend.

---

## Basic Error Handling

The backend includes basic error handling for

- invalid login credentials
- missing authentication tokens
- database errors
- invalid access based on user role

---

## Environment Variables

Backend requires the following variables


PORT
MONGO_URI
JWT_SECRET


---

## Author

Mayur Uttam Ghule

## Live Application

Frontend URL  
