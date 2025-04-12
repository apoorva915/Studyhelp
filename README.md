## Project Description

The project is a Next.js Full Stack AI-Powered LMS SaaS Platform designed to deliver on-demand, personalized learning content using advanced AI and modern web technologies. It bridges the gap between structured learning and accessibility by allowing users to input a topic, select a material type (exam prep, interview, learning, coding, etc.), and choose a difficulty level, after which the platform generates tailored course materials like outlines, notes, flashcards, and quizzes using Gemini AI.
The system is optimized for scalability, real-time generation, and engagement, making it perfect for learners at all stages—from school students to competitive exam aspirants, job seekers, and lifelong learners. It also supports subscription-based access, interactive content, and real-time progress tracking.

## Key Features

(1) AI-Powered Personalized Content Generation
(2) Material Type Personalization
(3) Secure User Authentication with Clerk
(4) Dynamic Learning Dashboard
(5) Interactive Learning Tools
(6) Stripe-Powered Payment System
(7) Serverless Backend with Inngest
(8) Neon Database (PostgreSQL)
(9) Modern UI/UX

## Tech Stack

Frontend: Next.js, React, Tailwind CSS

AI Integration: Gemini AI API

Authentication: Clerk 

Payments: Stripe

Backend: Inngest

Database: Neon(PostgreSQL)

## PPT LINK: 
https://www.canva.com/design/DAGht_GhCBs/HNJl0qbh-r-DfH84FefDRQ/edit

## DEMO VIDEO: 
https://www.youtube.com/watch?v=R_kmvlX6et8

## Getting Started

1. Clone the Repository

      git clone https://github.com/krishnaanshgoel/Studyhelp.git
      cd Studyhelp

 2. Install Dependencies

      npm install

3. Create a .env File

      In the root of your project, create a .env file:

      DATABASE_URL=postgresql://your-username:your-password@your-neon-host/your-db-name?sslmode=require
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
      CLERK_SECRET_KEY=your-secret-key
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
      NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
      NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
      STRIPE_SECRET_KEY=your-stripe-secret-key
      NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=your-stripe-price-id
      STRIPE_WEB_HOOK_KEY=your-stripe-webhook-key
      HOST_URL='http://localhost:3000/'

4. Setup and run the Inngest server

      npm install -g inngest-cli
      npx inngest-cli@latest dev

5. Run the Dev Server

    npm run dev

6. Your app should now be running at http://localhost:3000 !

