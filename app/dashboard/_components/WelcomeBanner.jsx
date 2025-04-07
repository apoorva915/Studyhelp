"use client"
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    const {user}=useUser();
  return (
    <div className="p-5 w-full text-white bg-primary rounded-lg flex items-center gap-6">
      <Image src={'/laptop.png'} alt="laptop" height={100} width={100} />
      <div>
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <p>Welcome Back, Its time to get back and and start learning new courses</p>
      </div>
    </div>
  )
}

export default WelcomeBanner
