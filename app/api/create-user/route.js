import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(request){
    const { user } = await request.json();
    console.log(user);
    const res=await inngest.send({
        name: "user.create",
        data: {
            user:user,
        },
    })
    return NextResponse.json({result:res});
}