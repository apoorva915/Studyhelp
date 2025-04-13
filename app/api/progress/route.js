import { db } from "@/configs/db";
import { USER_PROGRESS_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId, courseId, chapterId } = await req.json();

  // Find existing progress
  const existing = await db
    .select()
    .from(USER_PROGRESS_TABLE)
    .where(eq(USER_PROGRESS_TABLE.userId, userId))
    .where(eq(USER_PROGRESS_TABLE.courseId, courseId));

  let completedChapters = [];

  if (existing.length > 0) {
    // Update if not already completed
    completedChapters = existing[0].completedChapters || [];
    if (!completedChapters.includes(chapterId)) {
      completedChapters.push(chapterId);

      await db
        .update(USER_PROGRESS_TABLE)
        .set({
          completedChapters: completedChapters,
        })
        .where(eq(USER_PROGRESS_TABLE.userId, userId))
        .where(eq(USER_PROGRESS_TABLE.courseId, courseId));
    }
  } else {
    // Create new progress record
    completedChapters = [chapterId];

    await db.insert(USER_PROGRESS_TABLE).values({
      userId,
      courseId,
      completedChapters,
    });
  }

  return NextResponse.json({ success: true, completedChapters });
}
