import { checkAndInsertUser } from "@/actions/user";
import { inngest } from "./client";
import { generateNotesAiModel, GenerateQuizAiModel, GenerateStudyTypeContentAiModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const CreateNewUser=inngest.createFunction(
    {id:"create-user"},
    {event:'user.create'},
    async({event,step})=>{
        const user=event.data.user;
        const res=await step.run("create-user",async()=>{
            checkAndInsertUser(
          user.primaryEmailAddress?.emailAddress || '',
          user.fullName,
            )
        })
        return "Success";
    }
)

export const GenerateNotes=inngest.createFunction(
  {id:'generate-course'},
  {event:'notes.generate'},
  async({event,step})=>{
    console.log(event.data);
    const course=event.data.course;
    const res=await step.run('Generate Chapter Notes',async()=>{
      const Chapters=course?.courseLayout?.chapters;

      console.log(Chapters);
      let index=0;
       for(const chapter of Chapters){
       const PROMPT='Generate exam material for each chapter, Make sure to include all topic points in the content,make sure to give content in html format(do no add HTML, Head,Body, Title tag),The chapters:'+JSON.stringify(chapter)
        const res=await generateNotesAiModel.sendMessage(PROMPT)
        const aiResp=res.response.text()
        console.log("data generated")
        await db.insert(CHAPTER_NOTES_TABLE).values({
          chapterId:index,
          courseId:course?.courseId,
          notes:aiResp,
      })
      index=index+1;
    }
    return 'Completed'
  })
  const updateCourseStatusResult=await step.run('Update Course Status',async()=>{
    const res=await db.update(STUDY_MATERIAL_TABLE).set({
      status:'Completed'
    }).where(eq(STUDY_MATERIAL_TABLE.courseId,course?.courseId))
  })
  }
)

export const GenerateStudyTypeContent=inngest.createFunction(
  {id:'Generate Study Type Content'}, 
  {event:'studyType.content'},

  async({event,step})=>{
    const {studyType,prompt,courseId,recordId}=event.data;

    const FlashcardAiResult=await step.run('Generating Flashcard using AI',async()=>{
         const res=
         studyType=='Flashcard'?await GenerateStudyTypeContentAiModel.sendMessage(prompt):await GenerateQuizAiModel.sendMessage(prompt);
         const Aires=JSON.parse(res.response.text());
         return Aires;
    })
    const dbres=await step.run('Save result to DB',async()=>{
      const res=await db.update(STUDY_TYPE_CONTENT_TABLE).set({
         content:FlashcardAiResult,
         status:'Ready'
      }).where(eq(STUDY_TYPE_CONTENT_TABLE.id,recordId))
      return 'Data Inserted'
    })
  }
)