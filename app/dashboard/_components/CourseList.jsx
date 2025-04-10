"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseCardItem from './CourseCardItem';

function CourseList() {
    const {user}=useUser();
    const[courseList,setCourseList]=useState([])

    useEffect(()=>{
        user&&GetCourseList()
    },[user])
    const GetCourseList=async()=>{
        const res=await axios.post('/api/courses',{
            createdBy:user?.primaryEmailAddress?.emailAddress
        })
        setCourseList(res.data.result)
        console.log(courseList)
    }
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">Your Study Material</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {courseList?.map((course,index)=>(
            <CourseCardItem course={course} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default CourseList
