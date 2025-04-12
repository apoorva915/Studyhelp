"use client"
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg" // replace with your actual logo path
            alt="StudyHelp Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-blue-700">StudyHelp</span>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center space-x-4">
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Button variant="outline">Join</Button>
            </Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 md:px-10 py-8">
        {/* Left: Text */}
        <div className="max-w-xl ">
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/logo.svg" // same logo used here again if needed
              alt="StudyHelp"
              width={80}
              height={80}
            />
            <h1 className="text-6xl font-extrabold text-blue-800">StudyHelp</h1>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            StudyHelp is your one-stop platform to master any topic. It helps you prepare efficiently
            by generating study material like detailed notes, flashcards, and quizzes tailored to your subject.
            Whether you're cramming for finals or just reviewing, StudyHelp has you covered.
          </p>
          <div className="flex space-x-4">
            <Link href="/dashboard">
              <Button className="px-6">Go to Dashboard</Button>
            </Link>
{   !isSignedIn &&         <Link href="/sign-in">
              <Button variant="outline" className="px-6">
                Join Now
              </Button>
            </Link>}
          </div>
        </div>

        {/* Right: Image */}
        <div className="mt-12 md:mt-0 md:ml-12">
          <Image
            src="/login.png" // replace with your actual study image path
            alt="Study Material"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </main>
    </div>
  );
}
