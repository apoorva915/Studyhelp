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
        console.log("notes:"+result?.data);
        setNotes(result?.data);
    }

    const parseText = (text) => {
        const lines = text.split('\n');
        const content = [];
        let listItems = [];
    
        const flushList = (isOrdered = false) => {
          if (listItems.length > 0) {
            const ListTag = isOrdered ? 'ol' : 'ul';
            content.push(
              <ListTag className="list-disc pl-5" key={`list-${content.length}`}>
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ListTag>
            );
            listItems = [];
          }
        };
    
        lines.forEach((line, i) => {
          const trimmed = line.trim();
          const bulletMatch = /^\*+\s(.*)/.exec(trimmed);
    
          const processBold = (str) => {
            const parts = [];
            const regex = /\*\*(.*?)\*\*/g;
            let lastIndex = 0;
            let match;
    
            while ((match = regex.exec(str)) !== null) {
              const [fullMatch, boldText] = match;
              const start = match.index;
              if (start > lastIndex) parts.push(str.slice(lastIndex, start));
              parts.push(<strong key={`bold-${start}`}>{boldText}</strong>);
              lastIndex = regex.lastIndex;
            }
    
            if (lastIndex < str.length) {
              parts.push(str.slice(lastIndex));
            }
    
            return parts;
          };
    
          if (bulletMatch) {
            listItems.push(processBold(bulletMatch[1]));
          } else {
            flushList(); // end previous list before normal text
            content.push(<div key={i}>{processBold(line)}</div>);
          }
        });
    
        flushList();
        return content;
      };

  return notes &&(
    <div>
        <StepProgress stepCount={stepCount} setStepCount={setStepCount} data={notes}/>

        <div className='mt-10'>
           {/* <div dangerouslySetInnerHTML={{ __html: notes[stepCount]?.notes?.replace('```html', '') || '' }} /> */}
           {/* <pre className="whitespace-pre-wrap">
  {notes[stepCount]?.notes?.replace('/```html/g', '').replace('/<\/?[^>]+(>|$)/g', '')}
</pre> */}
{/* <HtmlRenderer rawHtml={notes[stepCount]?.notes} /> */}
<div className="p-4">
      {stepCount<notes?.length && notes[stepCount].notes.map((note, index) => (
        <div className="mt-10 mb-5 m-5 bg-blue-100 p-3 rounded-lg" key={index}>
          <h2 className="font-bold text-lg mb-2">
            {index + 1}). {note.heading}
          </h2>
          <div className="space-y-2">{parseText(note.notes)}</div>
        </div>
      ))}
    </div>


            {notes?.length==stepCount&&<div className='flex items-center gap-10 flex-col justify center'>
                <h2>End of Notes</h2>
                <Button onClick={()=>route.back()}>Go to Course Page</Button>
            </div>}
        </div>
    </div>
  )
}

export default ViewNotes
