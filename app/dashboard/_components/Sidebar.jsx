"use client"
import { CourseCountContext } from '@/app/_context/CourseCountContext'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LayoutDashboard, LayoutDashboardIcon, Shield, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'

function Sidebar() {
    const MenuList=[
        {
            name:"Dashboard",
            icon:LayoutDashboard,
            path:'/dashboard',
        },
        {
            name:'Upgrade',
            icon:Shield,
            path:'/dashboard/upgrade',
        },
        {
            name:"Profile",
            icon:UserCircle,
            path:"/dashboard/profile",
        }
    ]
    const {totalCourse,setTotalCourse}=useContext(CourseCountContext);
    const path=usePathname()
  return (
    <div className="h-screen shadow-md p-5">
      <div className="flex items-center gap-2">
        <Image src={'/logo.svg'} width={40} height={40} alt="logo"></Image>
        <h2 className="font-bold text-2xl">StudyHelp</h2>
      </div>
      <div className="mt-10">
        <Link href={'/create'}>
        <Button className="w-full">+ Create New</Button>
        </Link>
          <div className="mt-5">
            {MenuList.map((item, index) =>(
              <Link key={index} href={item.path} > 
                <div  className={`flex items-center gap-5 p-3 hover:bg-slate-200
                rounded-lg cursor-pointer mt-3 ${path===item.path && 'bg-slate-200'}`}>
                    <item.icon />
                  <h2>{item.name}</h2>
                </div>
                </Link>
            ))}
          </div>
      </div>
      <div className="border bg-slate-100 p-3 rounded-lg absolute bottom-10 w-[85%]">
        <h2 className="text-lg mb-2">Available Credits:{(5-totalCourse)}</h2>
        <Progress value={(totalCourse/5)*100} />
        <h2 className="text-sm">{totalCourse} out of 5 credits used</h2>
        <Link href={'/dashboard/upgrade'} className="text-blue-500 text-xs mt-3">Upgrade to create more</Link>
      </div>
    </div>
  )
}

export default Sidebar
