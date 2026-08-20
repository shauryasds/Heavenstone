# 🏰 Havenstone Realty — Enterprise Luxury Real Estate Platform

A modern, full-stack luxury real estate platform engineered for performance, scalability, and exceptional user experience. Havenstone Realty combines a visually immersive property discovery experience with a robust serverless backend powered by MongoDB Atlas and Express.js, delivering seamless performance across desktop and mobile devices.

Built using **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Node.js**, **Express.js**, and **MongoDB Atlas**, the platform is optimized for deployment on **Vercel** with serverless architecture and intelligent database connection management.

---
<img width="1907" height="845" alt="image" src="https://github.com/user-attachments/assets/52210905-172f-4e25-97fc-5c6f1afc4b48" />
<img width="1919" height="841" alt="image" src="https://github.com/user-attachments/assets/8865e667-6e81-4d29-b67e-b3f3da15254e" />
<img width="1917" height="855" alt="image" src="https://github.com/user-attachments/assets/dd95145d-b058-46d8-9808-449c5c4a3ec5" />
<img width="1918" height="852" alt="image" src="https://github.com/user-attachments/assets/48e70a12-6438-4dd1-a5e0-a458fe3f3a05" />

# ✨ Key Features

### 🏡 Luxury Property Marketplace

Browse an exclusive collection of premium properties featuring high-resolution imagery, detailed specifications, pricing insights, and rich property descriptions.

### 🔍 Intelligent Property Search & Filtering

Discover properties effortlessly using advanced filtering options:

* Location & City
* Property Type (Villa, Penthouse, Apartment)
* Sale or Rental Listings
* Price Range
* Keyword-Based Search

Results update dynamically for a fast and intuitive browsing experience.

### 🎨 Premium User Experience

Designed with modern UI/UX principles:

* Responsive layouts across all devices
* Smooth animations powered by Framer Motion
* Elegant luxury-inspired design system
* Optimized performance and accessibility

### ⚡ Serverless Express API

A production-ready backend designed specifically for Vercel Serverless Functions featuring:

* RESTful API architecture
* Connection pooling and MongoDB middleware
* Environment-based configuration
* Scalable deployment workflow

### 🌱 Automatic Database Initialization

The platform automatically detects empty databases during deployment and populates MongoDB with curated luxury property data, ensuring a fully functional experience from day one.

### 🔐 Production-Ready Infrastructure

Includes:

* MongoDB Atlas integration
* Environment-based configuration
* Dynamic CORS handling
* Secure API architecture
* Cloud deployment support

---

# 🛠 Technology Stack

## Frontend

| Technology    | Purpose                           |
| ------------- | --------------------------------- |
| React 18      | Component-based UI Development    |
| Vite          | High-speed Development & Bundling |
| Tailwind CSS  | Utility-First Styling             |
| Framer Motion | Animations & Transitions          |
| Lucide React  | Modern Icon System                |
| Axios         | API Communication                 |

---

## Backend

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| Node.js       | JavaScript Runtime         |
| Express.js    | REST API Framework         |
| MongoDB Atlas | Cloud Database             |
| Mongoose      | ODM & Schema Management    |
| CORS          | Cross-Origin Communication |
| Dotenv        | Environment Management     |

---

## Deployment & Infrastructure

| Service       | Purpose                                 |
| ------------- | --------------------------------------- |
| Vercel        | Frontend Hosting & Serverless Functions |
| MongoDB Atlas | Managed Cloud Database                  |
| GitHub        | Version Control & CI Workflow           |

---

# 📂 Project Structure

```text
Havenstone/
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── data/
│   │   └── seedData.js
│   ├── models/
│   │   └── Property.js
│   ├── routes/
│   │   └── api.js
│   ├── index.js
│   └── package.json
│
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
│
├── vercel.json
├── package.json
└── README.md
```

---

# 🔌 API Documentation

## Health Check

### GET `/health`

Returns application status and MongoDB connection health.

### Response

```json
{
  "status": "online",
  "service": "Havenstone Realty API",
  "databaseConnected": true
}
```

---

## Retrieve Properties

### GET `/api/properties`

Fetch all property listings with optional filtering.

### Supported Query Parameters

| Parameter | Description                 |
| --------- | --------------------------- |
| location  | Filter by city or location  |
| type      | Villa, Penthouse, Apartment |
| purpose   | For Sale / For Rent         |
| search    | Full-text search            |
| minPrice  | Minimum property price      |
| maxPrice  | Maximum property price      |

### Example

```http
GET /api/properties?type=Villa&location=Dubai
```

---

## Property Details

### GET `/api/properties/:id`

Retrieve complete information for a specific property.

### Example

```http
GET /api/properties/65d8f9a2b1c4e723901a8b45
```

---

## Contact & Enquiry Submission

### POST `/api/contact`

Submit a customer enquiry directly to the platform.

### Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 555-0199",
  "requirement": "Buy",
  "message": "I would like to schedule a private viewing.",
  "propertyId": "optional_property_id"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Thank you for reaching out. A Havenstone Realty specialist will contact you shortly."
}
```

---

# ⚙️ Environment Configuration

Create a `.env` file inside the `server` directory:

```env
PORT=2000
NODE_ENV=development

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.v9szgjm.mongodb.net/Cluster0?retryWrites=true&w=majority

CLIENT_URL=http://localhost:5173
```

---

# 🚀 Local Development

## Clone Repository

```bash
git clone https://github.com/shauryasds/Havenstone.git
cd Havenstone
```

---

## Install Dependencies

```bash
npm install

cd server
npm install
cd ..
```

---

## Start Application

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run server
```

---

# ☁️ Deployment Guide

## MongoDB Atlas Setup

Before deployment:

1. Create a MongoDB Atlas Cluster
2. Create a Database User
3. Navigate to **Network Access**
4. Add:

```text
0.0.0.0/0
```

5. Copy the Atlas connection string

---

## Vercel Deployment

### Required Environment Variables

```env
MONGODB_URI=<atlas_connection_string>
CLIENT_URL=https://your-domain.vercel.app
NODE_ENV=production
```

### Deployment Steps

1. Push code to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy

The frontend will be served as a static Vite application while Express APIs are automatically exposed through Vercel Serverless Functions.

---

# 🎯 Highlights

* Modern Full-Stack Architecture
* Serverless Deployment Ready
* MongoDB Atlas Integration
* Dynamic Property Search
* Responsive Luxury UI
* Production-Grade REST APIs
* Automatic Database Seeding
* Optimized for Vercel

---

# 📜 License

Licensed under the MIT License.

Built with ❤️ using React, Node.js, Express, MongoDB Atlas, and Vercel.
