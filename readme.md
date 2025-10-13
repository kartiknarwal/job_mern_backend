# MERN Job App Backend

This repository contains the backend API for the MERN Job App, a job listing and application platform built with MongoDB, Express.js, React, and Node.js.

## Features

- User authentication (JWT)
- Role-based access (Admin, Employer, Job Seeker)
- CRUD operations for jobs and applications
- Employer profile management
- Job seeker profile management
- RESTful API endpoints
- Error handling and validation

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- dotenv for environment variables
- bcrypt for password hashing
- CORS
- Cloudinary for media storage

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance (local or cloud)
- Cloudinary account (for media uploads)

### Installation

```bash
git clone https://github.com/kartiknarwal/job_mern_backend
cd mern-job-app-backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLIENT_NAME=your_cloudinary_client_name
CLOUDINARY_CLIENT_API=your_cloudinary_api_key
CLOUDINARY_CLIENT_SECRET=your_cloudinary_api_secret
```

> **Note:**  
> To use Cloudinary, create an account at [Cloudinary](https://cloudinary.com/) and obtain your credentials: `CLOUDINARY_CLIENT_NAME`, `CLOUDINARY_CLIENT_API`, and `CLOUDINARY_CLIENT_SECRET`.

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT

### Jobs

- `GET /api/jobs` - List all jobs
- `POST /api/jobs` - Create a new job (Employer only)
- `GET /api/jobs/:id` - Get job details
- `PUT /api/jobs/:id` - Update job (Employer only)
- `DELETE /api/jobs/:id` - Delete job (Employer only)

### Applications

- `POST /api/applications` - Apply for a job (Job Seeker only)
- `GET /api/applications` - List applications (Admin/Employer/Job Seeker)

### Users

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Folder Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
├── server.js
└── readme.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

