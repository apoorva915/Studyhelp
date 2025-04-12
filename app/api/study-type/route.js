import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
    const {courseId, studyType}= await req.json();

    if(studyType=='ALL'){
        const notes=await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId,courseId));

        //create all other tpes(flashcard, etc etc), not done for now
        const contentList=await db.select().from(STUDY_TYPE_CONTENT_TABLE)
        .where(eq(STUDY_TYPE_CONTENT_TABLE?.courseId,courseId));
        console.log("contentList:"+contentList);
        const result={
            notes:notes,
            flashcard:contentList.find(item=>(item.type=='Flashcard')),
            quiz:contentList.find(item=>(item.type=='Quiz')),
            aq:contentList.find(item=>(item.type=='QA')),
        }
        return NextResponse.json(result);
    }
    else if(studyType=='notes'){
        const notes=await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId,courseId));

        return NextResponse.json(notes);
    }
    else{
        const notes=await db.select().from(STUDY_TYPE_CONTENT_TABLE)
        .where(and(eq(STUDY_TYPE_CONTENT_TABLE?.courseId,courseId),eq(STUDY_TYPE_CONTENT_TABLE?.type,studyType)));

        return NextResponse.json(notes[0]);
    }
}