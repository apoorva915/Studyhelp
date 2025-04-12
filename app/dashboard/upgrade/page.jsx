"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {eq} from 'drizzle-orm'
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";

const plans = [
  {
    name: "Free",
    price: "0$",
    period: "/month",
    features: [
      "5 Course Generate",
      "Limited Support",
      "Email support",
      "Help center access",
    ],
    cta: "Current Plan",
    ctaStyle: "text-blue-600 font-semibold",
    isCurrent: true,
  },
  {
    name: "Monthly",
    price: "9.99$",
    period: "/Monthly",
    features: [
      "Unlimited Course Generate",
      "Unlimited Flashcard, Quiz",
      "Email support",
      "Help center access",
    ],
    cta: "Get Started",
    ctaStyle:
      "bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700",
    isCurrent: false,
  },
];

const Upgrade = () => {
    const {user}=useUser();
    const[userDetail, setUserDetail]=useState();

    useEffect(()=>{
      user && GetUserDetail();
    },[user])

    const GetUserDetail=async()=>{
      const result=await db.select().from(USER_TABLE)
      .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress));

      setUserDetail(result[0]);
    }
    
    const OnCheckoutClick= async ()=>{
         const res=await axios.post('/api/payment/checkout',{
            priceId:process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
         })
         console.log(res.data);
         window.open(res.data?.url);
    }
  return (
    <div className="min-h-screen py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-2">Plans</h2>
      <p className="text-gray-600 mb-10">
        Update your plan to generate unlimited courses for your exam
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition "
          >
            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-1">{plan.price}</p>
            <p className="text-gray-500 mb-6">{plan.period}</p>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              {plan.isCurrent ? (
                <p className={plan.ctaStyle}>{plan.cta}</p>
              ) : (
                <Button onClick={OnCheckoutClick } className={plan.ctaStyle}>{plan.cta}</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upgrade;