// app/api/courses/delete/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import { inngest } from '@/inngest/client';
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE } from '@/configs/schema';

export async function DELETE(req) {
  try {
    const { courseId } = await req.json(); // ✅ Get courseId from body

    if (!courseId) {
      return NextResponse.json({ success: false, message: 'Missing courseId' }, { status: 400 });
    }
//studyMaterial, chapterNotes, studyTypeContent
    // 1. Delete from child tables first
    await db.delete(STUDY_TYPE_CONTENT_TABLE).where(eq(STUDY_TYPE_CONTENT_TABLE.courseId, courseId));
    await db.delete(CHAPTER_NOTES_TABLE).where(eq(CHAPTER_NOTES_TABLE.courseId, courseId));

    // 2. Delete from main course table
    await db.delete(STUDY_MATERIAL_TABLE).where(eq(STUDY_MATERIAL_TABLE.courseId, courseId));

    // 3. Background job (e.g., analytics, logs)
    await inngest.send({
      name: 'course/deleted',
      data: {
        courseId,
        deletedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({ success: true, message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
