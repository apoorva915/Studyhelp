PROJECT DESCRIPTION:
The project is a Next.js Full Stack AI-Powered LMS SaaS Platform designed to deliver on-demand, personalized learning content using advanced AI and modern web technologies. It bridges the gap between structured learning and accessibility by allowing users to input a topic, select a material type (exam prep, interview, learning, coding, etc.), and choose a difficulty level, after which the platform generates tailored course materials like outlines, notes, flashcards, and quizzes using Gemini AI.
The system is optimized for scalability, real-time generation, and engagement, making it perfect for learners at all stages—from school students to competitive exam aspirants, job seekers, and lifelong learners. It also supports subscription-based access, interactive content, and real-time progress tracking.

KEY FEATURES:
(1) AI-Powered Personalized Content Generation
Input any topic, select a goal (exam, coding prep, learning, etc.) and difficulty level.
Gemini AI automatically generates:
  Structured course outlines
  Detailed notes & chapters
  Flashcards for active recall
  Quizzes for self-assessment

(2) Material Type Personalization
Material generated is contextually tailored for:
  Exams (e.g., NEET, JEE, GRE)
  Interview Prep (e.g., DSA, system design)
  Concept Learning
  Coding Practice

(3) Secure User Authentication with Clerk
Easy and secure login/signup
Personalized dashboards for each user
Session management and user context handling

(4) Dynamic Learning Dashboard
Displays:
  Enrolled/generated topics
  Progress tracking
  Quick access to notes, flashcards, and quizzes
Filter by material type, topic, or status

(5) Interactive Learning Tools
Flashcards for spaced repetition
Auto-generated quizzes with real-time feedback
Notes structured into digestible chapters


(6) Stripe-Powered Payment System
Freemium model: limited content free
Subscription access for unlimited content
Secure checkout using Stripe APIs

(7) Serverless Backend with Inngest
Handles all async and AI generation events
Scalable, event-driven functions—no need for traditional servers

(8) Neon Database (PostgreSQL)
Stores:
  User profiles
  Generated content
  Progress tracking
Fully scalable and efficient relational storage

(9) Modern UI/UX
Built using Tailwind CSS for responsive, clean design
Optimized for mobile, desktop, and tablets

TECH STACK
Frontend: Next.js, React, Tailwind CSS
AI Integration: Gemini AI API
Authentication: Clerk 
Payments: Stripe
Backend: Inngest
Database: Neon(PostgreSQL)
Deployment: Vercel

PPT LINK: https://www.canva.com/design/DAGht_GhCBs/HNJl0qbh-r-DfH84FefDRQ/edit
DEMO VIDEO: https://www.youtube.com/watch?v=R_kmvlX6et8

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

