import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// Utility to clean ```json ... ``` wrapped notes and parse them
function cleanTripleBacktickJSON(notesArray) {
    return notesArray.map((noteObj) => {
        try {
            if (typeof noteObj?.notes === 'string') {
                try{
                const cleaned = noteObj.notes
                    .replace(/^```json\s*/i, '') // remove starting ```json
                    .replace(/```$/, '');      // remove ending ```
                return {
                    ...noteObj,
                    notes: JSON.parse(cleaned)
                };}catch(err){
                    console.error("Failed to parse JSON:", err);
                    return {
                        ...noteObj,
                        notes: JSON.parse(noteObj.notes
                            .replace(/^```json\s*/i, '') // remove starting ```json
                            .replace(/```$/, '').replace(/\\(?!["\\/bfnrtu])/g, "\\\\"))
                    };
                }
            }
        } catch (err) {
            console.error("Failed to parse a note:", err);
        }
        return null;
    }).filter(Boolean);
}

export async function POST(req) {
    const { courseId, studyType } = await req.json();

    if (studyType === 'ALL') {
        const notesData = await db.select().from(CHAPTER_NOTES_TABLE)
            .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

        const contentList = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
            .where(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId));

        const cleanedNotes = cleanTripleBacktickJSON(notesData);

        const result = {
            notes: cleanedNotes,
            flashcard: contentList.find(item => item.type === 'Flashcard'),
            quiz: contentList.find(item => item.type === 'Quiz'),
            aq: contentList.find(item => item.type === 'QA'),
        };

        return NextResponse.json(result);
    }

    else if (studyType === 'notes') {
        const notesData = await db.select().from(CHAPTER_NOTES_TABLE)
            .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));
        console.log(notesData);
        const cleanedNotes = cleanTripleBacktickJSON(notesData);
        console.log(cleanedNotes)
        return NextResponse.json(cleanedNotes);
    }

    else {
        const notes = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
            .where(and(
                eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId),
                eq(STUDY_TYPE_CONTENT_TABLE?.type, studyType)
            ));

        return NextResponse.json(notes[0]);
    }
}
