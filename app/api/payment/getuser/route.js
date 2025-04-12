import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
       const {user}=await req.json();
          const result=await db.select().from(USER_TABLE)
          .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress));
          return NextResponse.json({res:result[0]});
    
}