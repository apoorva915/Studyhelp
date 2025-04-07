import React from 'react'
import Image from 'next/image';


function SelectOption () {
    const Options=[
        {
            name:'Exam',
            icon:'/exam_1.png'
        },
        {
            name:'Job Interview',
            icon:'/job.png'
        },
        {
            name:'Practice',
            icon:'/practice.png'
        },
        {
            name:'Coding Prep',
            icon:'/code.png'
        },
        {
            name:'Other',
            icon:'/knowledge.png'
        },
    ]
  return (
    <div>
      <h2 className='text-center mb-2 text-lg'>For what do you want to create your personal study material?</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {Options.map((option,index)=>(
            <div key={index}>
                <Image src={option.icon} alt={option.name} width={50} height={50}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SelectOption
