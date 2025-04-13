"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Router } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState }from 'react'
import { useEffect } from 'react'
import StepProgress from '../_components/StepProgress'
import HtmlNotesViewer from '@/app/Htmlconverted'
import HtmlRenderer from '@/app/Htmlconverted'

function ViewNotes() {

    const {courseId}=useParams();
    const [notes,setNotes]=useState();
    const[stepCount,setStepCount]=useState(0);
    const route=useRouter();

    useEffect(()=>{
        GetNotes();
    },[])
    const GetNotes=async()=>{
        const result= await axios.post('/api/study-type',{
            courseId:courseId,
            studyType:'notes'
        })
        console.log(result?.data);
        setNotes(result?.data);
    }
  return notes &&(
    <div>
        <StepProgress stepCount={stepCount} setStepCount={setStepCount} data={notes}/>

        <div className='mt-10'>
           <div dangerouslySetInnerHTML={{ __html: notes[stepCount]?.notes?.replace('```html', '') || '' }} />
           {/* <pre className="whitespace-pre-wrap">
  {notes[stepCount]?.notes?.replace('/```html/g', '').replace('/<\/?[^>]+(>|$)/g', '')}
</pre> */}
{/* <HtmlRenderer rawHtml={notes[stepCount]?.notes} /> */}

            {notes?.length==stepCount&&<div className='flex items-center gap-10 flex-col justify center'>
                <h2>End of Notes</h2>
                <Button onClick={()=>route.back()}>Go to Course Page</Button>
            </div>}
        </div>
    </div>
  )
}

export default ViewNotes
