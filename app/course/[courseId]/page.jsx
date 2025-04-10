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
        GetCourse();
    },[])

    const GetCourse=async()=>{
        const result=await axios.get('/api/courses?courseId='+courseId);
        console.log(result);
        setCourse(result.data.result);
    }
  return (
    <div>
      <DashboardHeader/>
      <div className='max-10 md:mx-36 lg:px-60 mt-10'> 
        <CourseIntroCard course={course}/>
        <StudyMaterialSection/>
        <ChapterList course={course}/>
      </div>
    </div>
  )
}

export default Course
