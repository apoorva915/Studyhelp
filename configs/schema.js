import { boolean, pgTable, serial, varchar, json } from "drizzle-orm/pg-core";

export const USER_TABLE=pgTable('users', {
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull().unique(),
    isMember:boolean('member').default(false),
})

export const STUDY_MATERIAL_TABLE= pgTable('studyMaterial', {
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    courseType:varchar().notNull(),
    topic:varchar().notNull(),
    difficultyLevel:varchar().default('Easy'),
    courseLayout:json(),
    createdBy:varchar().notNull(),
    status:varchar().default('Generating')
})
