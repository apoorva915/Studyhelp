import React from 'react'
import {Textarea} from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function TopicInput({setTopic,setDifficultyLevel}) {
  return (
    <div className='mt-10 w-full flex flex-col'>
      <h2>Enter topic or paste the content for which you want to generate tstudy material.</h2>
      <Textarea placeholder='Start writing here' className="mt-2 w-full" onChange={(event)=>setTopic(event.target.value)} />

      <h2 className='mt-5 mb-3'>Select the difficulty level</h2>
      <Select onValueChange={(value)=>setDifficultyLevel(value)}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty level" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
       </Select>

    </div>
  )
}

export default TopicInput
