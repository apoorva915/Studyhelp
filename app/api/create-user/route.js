import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { user } = await request.json();
      
        if (!user?.email || !user?.name) {
          return NextResponse.json({ error: "Missing required user data" }, { status: 400 });
        }
      
        console.log("User received in API:", user);
      
        const res = await inngest.send({
          name: "user.create",
          data: {
            user, // now it's a clean object with basic fields
          },
        });
      
        return NextResponse.json({ result: res });
      } catch (err) {
        console.error("API /create-user error:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
}