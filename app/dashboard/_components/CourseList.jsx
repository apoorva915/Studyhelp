"use client"

import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseCardItem from './CourseCardItem'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'

function CourseList() {
  const { user } = useUser()
  const [courseList, setCourseList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    user && GetCourseList()
  }, [user])

  const GetCourseList = async () => {
    setLoading(true)
    const res = await axios.post('/api/courses', {
      createdBy: user?.primaryEmailAddress?.emailAddress,
    })
    setCourseList(res.data.result)
    setLoading(false)
  }

  return (
    <div className="mt-10">
      {/* Header with title and refresh button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Study Material</h2>
        <Button
          variant="outline"
          onClick={GetCourseList}
          className="border-primary text-primary flex items-center gap-2"
        >
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      {/* Course grid or loading skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {!loading
          ? courseList?.map((course, index) => (
              <CourseCardItem course={course} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-56 w-full bg-slate-200 rounded-lg animate-pulse"
              />
            ))}
      </div>
    </div>
  )
}

export default CourseList
