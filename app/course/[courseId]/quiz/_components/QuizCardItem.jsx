import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function QuizCardItem({quiz,userSelectedOption}) {
    const [selected,setSelected]=useState();
  return (
    <div className="mt-10 p-5">
       <h2 className="font-medium text-3xl w-full flex justify-center">{quiz?.question}</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {quiz?.options.map((item,index)=>(
            <h2 onClick={()=>{setSelected(item),userSelectedOption(item)}}
            key={index} className={`w-full border rounded-full p-3 text-center text-lg
            hover:bg-gray-200 cursor-pointer
            ${selected==item && 'bg-primary text-white hover:bg-primary hover:text-white'}`}>{item}</h2>
        ))}
       </div>
    </div>
  )
}

export default QuizCardItem
