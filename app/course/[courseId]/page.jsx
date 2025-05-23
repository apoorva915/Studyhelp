"use client"
import React, { useState } from 'react'
import { useParams } from 'next/navigation';
import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import axios from 'axios';
import { useEffect } from 'react';
import CourseIntroCard from './_components/CourseIntroCard';
import StudyMaterialSection from './_components/StudyMaterialSection';
import ChapterList from './_components/ChapterList';

function Course() {
    const {courseId}=useParams();
    const [course,setCourse]=useState();

    useEffect(()=>{
      const cached = localStorage.getItem(`course-${courseId}`)
      if (cached) {
        setCourse(JSON.parse(cached))
      } else {
        GetCourse()
      }
    },[])

    const GetCourse=async()=>{
        const result=await axios.get('/api/courses?courseId='+courseId);
        console.log(result);
        setCourse(result.data.result);
        localStorage.setItem(`course-${courseId}`, JSON.stringify(result.data.result))
    }
  return (
    <div>
      <DashboardHeader/>
      <div className=''> 
        <CourseIntroCard course={course}/>
        <StudyMaterialSection courseId={courseId} course={course}/>
        <ChapterList course={course}/>
      </div>
    </div>
  )
}

export default Course
