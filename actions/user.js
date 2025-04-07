"use server"
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function checkAndInsertUser(email, name) {
  const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, email));
  if (result.length === 0) {
    const inserted = await db.insert(USER_TABLE).values({
      name,
      email,
      isMember: false,
    }).returning({ id: USER_TABLE.id });
    console.log(inserted);
    return inserted;
  }
  console.log(result);
  return null;
}
