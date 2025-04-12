import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema"
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req){
    const {chapters,courseId,type}=await req.json()

    const PROMPT=type=='Flashcard'?
    'Generate the Flashcard on topic: '+chapters +' in JSON format with front back content, Maximum 15':
    'Generate quiz on topic: '+ chapters +'with Question and Options along with correct answers in json format'

    const res=await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId:courseId,
        type:type,
    }).returning({id:STUDY_TYPE_CONTENT_TABLE.id});

    inngest.send({
        name:'studyType.content',
        data:{
            studyType:type,
            prompt:PROMPT,
            courseId:courseId,
            recordId:res[0].id,
        }
    })

    return NextResponse.json(res[0].id)
}