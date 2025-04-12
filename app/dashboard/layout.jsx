"use client"
import React, { useState } from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'
import { CourseCountContext } from '../_context/CourseCountContext'

function Dashboardlayout({children}) {
  const [totalCourse,setTotalCourse]=useState(0);
  return (
    <CourseCountContext.Provider value={{totalCourse,setTotalCourse}}>
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <Sidebar />
        </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-10">
            {children}
        </div>
      </div>
    </div>
    </CourseCountContext.Provider>
  )
}

export default Dashboardlayout
