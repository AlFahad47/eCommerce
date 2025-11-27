eCommerce

A high-end, minimalist eCommerce application built with Next.js 16 (App Router) and MongoDB. This project features a polished UI, secure authentication, and a complete product management dashboard where users can manage their own inventory.

🚀 Features

Modern Tech Stack: Built on the bleeding edge with Next.js 16, React 19, and Tailwind CSS v4.

Authentication: Secure login/registration using NextAuth.js (Credentials + Google) with bcrypt password hashing.

Database: Native MongoDB driver for high-performance server-side data fetching.

Protected Routes: User-specific dashboards. Users can view or delete products they created.

Responsive Design: Fully mobile-optimized UI with custom animations and glassmorphism effects.

Interactive UI: React Hook Form for validation and Sonner for toast notifications.

🛠️ Tech Stack

Frontend: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, DaisyUI

Backend: Next.js Route Handlers (Serverless API)

Database: MongoDB (Native Driver)

Auth: NextAuth.js v4, Bcryptjs

⚙️ Setup & Installation

Follow these steps to run the project locally.

1. Clone the repository

git clone [https://github.com/AlFahad47/eCommerce.git](https://github.com/AlFahad47/eCommerce.git)


2. Install dependencies

Since this project uses React 19 RC and NextAuth v4, use the legacy peer deps flag to ensure compatibility:

npm install --legacy-peer-deps


3. Configure Environment Variables

Create a file named .env.local in the root directory. You can copy the structure below:


MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret_here


GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret



4. Run the development server

npm run dev


Open http://localhost:3000 with your browser to see the result.

📂 Route Summary

Public Routes

These pages are accessible to anyone.

Path

Description

/

Home Page – Hero section, brand values, and "New Arrivals" feed.

/products

Products– Full grid of Products.

/products/[id]

Details – Individual product view with price, description, and images.

/about

About Us – Brand story, mission, and team section.

/login

Auth – Unified Login and Registration form.

Protected Routes

Accessible only to logged-in users.

Path

Description

/dashboard/add

Add Product – Form to upload new inventory (auto-tagged to the logged-in user).

/dashboard/manage

Manage Products–  view or delete products owned by the current user.

API Routes

Backend endpoints handled by Next.js.

Endpoint

Method

Description

/api/register

POST

Creates a new user, hashes password, and saves profile image.

/api/products

GET

Fetches products. Supports ?my=true query param for user filtering.

/api/products

POST

Creates a new product linked to the user's session email.

/api/products/[id]

GET

Fetches a single product details.

/api/products/[id]

DELETE

Deletes a specific product.

/api/auth/[...nextauth]

GET, POST

Handles login sessions (NextAuth).