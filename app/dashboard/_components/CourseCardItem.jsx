"use client"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RefreshCcw, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Link  from 'next/link'
import axios from 'axios'
import { toast } from 'sonner'

function CourseCardItem({course}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this course?');
    if (!confirm) return;
    toast('Deleting course...')
    setLoading(true);
    setStatus('');
    try {
      const res = await axios.delete('/api/delete', {
        
        data: {courseId:course.courseId}, // ✅ courseId in body
      });

      setStatus(res.data.message || 'Deleted successfully');
      toast('Deleted Course Successfully')
      // Optionally, you can call a function to refresh the course list or update the UI 
    } catch (err) {
      console.error(err);
      setStatus('Failed to delete course');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`border-5 rounded-lg p-5 shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full max-w-sm h-full ${course.difficultyLevel=='easy' && "border-green-500"}
    ${course.difficultyLevel=='medium' && "border-yellow-500"} ${course.difficultyLevel=='hard' && "border-red-500"}  `}>
      <div>
        <div className="flex justify-between items-center">
            <Image src={'/knowledge.png'} alt="logo" width={50} height={50} />
            <h2 className="text-[15px] p-1 px-3 rounded-full bg-blue-600 text-white">{course.date}</h2>
        </div>
        <h2 className="mt-3 text-lg font-medium h-[3rem]">{course?.courseLayout?.courseTitle}</h2>
        <p className="text-sm line-clamp-2 text-gray-500 mt-2">{course?.courseLayout?.courseSummary}</p>
        <div className="mt-3">
            <Progress value={10} />
        </div>
        <div className="flex justify-between mt-3">
          <div>
           {course?.status=='Generating'?null: <Button variant="destructive" onClick={handleDelete}>
              {loading?'Deleting...':'Delete'}</Button>}
          </div>
            {course?.status=='Generating'?
            <h2 className="text-sm p-1 px-2 rounded-full bg-gray-400 text-white flex gap-2 items-center"><RefreshCw className="h-5 w-5 animate-spin"/> Generating...</h2>
            :
            <Link href={'/course/'+course?.courseId}>
              <Button>View</Button>
            </Link>}
        </div>
      </div>
    </div>
  )
}

export default CourseCardItem

