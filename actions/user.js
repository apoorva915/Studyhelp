/*"use server"
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function checkAndInsertUser(email, name) {
  const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, email));
  if (result.length === 0) {
    const inserted = await db.insert(USER_TABLE).values({
      name:name,
      email:email,
      isMember: false,
    }).returning({ id: USER_TABLE.id });
    console.log(inserted);
    return inserted;
  }
  console.log(result);
  return null;
}*/


"use server";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function checkAndInsertUser(email, name) {
  // fallback in case name is null or undefined
  const safeName = name || "Anonymous";

  const result = await db
    .select()
    .from(USER_TABLE)
    .where(eq(USER_TABLE.email, email));

  if (result.length === 0) {
    const inserted = await db
      .insert(USER_TABLE)
      .values({
        name: safeName,
        email: email,
        isMember: false,
      })
      .returning({ id: USER_TABLE.id });

    console.log("Inserted user:", inserted);
    return inserted;
  }

  console.log("User already exists:", result);
  return result[0]; // return the existing user instead of null
}
