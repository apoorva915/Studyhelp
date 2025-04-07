import { checkAndInsertUser } from "@/actions/user";
import { inngest } from "./client";

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