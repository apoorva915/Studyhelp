import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req){
    const{courseId, topic, courseType, difficultyLevel, createdBy}=await req.json();

    const PROMPT= 'Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' with summary of course, List of Chapters along with summary for each chapter, Topic list in each chapter in JSON format'
    //generate course layout using AI
    const aiResp= await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult=JSON.parse(await aiResp.response.text());
    //save the result along with user input
    console.log({ courseType, courseId, createdBy, topic, difficultyLevel });

    const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId:courseId,
        courseType:courseType,
        createdBy:createdBy,
        topic:topic,
        courseLayout:aiResult,
        difficultyLevel:difficultyLevel,
    }).returning({resp:STUDY_MATERIAL_TABLE})

     const res=await inngest.send({
        name:'notes.generate',
        data:{
            course:dbResult[0].resp,
        }
     })

    return NextResponse.json({result:dbResult[0]})
}