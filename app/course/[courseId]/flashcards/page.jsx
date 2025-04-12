"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Flashcarditem from './flashcarditem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function Flashcards() {
    const {courseId}=useParams();
    const [flashcards,setFlashcards]=useState([]);
    const [isFlipped, setIsFlipped] = useState();
    const [api, setApi] = useState();
    useEffect(()=>{
        GetFlashCards();
    },[])
    useEffect(()=>{
        if(!api){
            return ;
        }
        api.on('select',()=>{
            setIsFlipped(false);
        })
    },[api])
    const GetFlashCards=async ()=>{
        const res=await axios.post('/api/study-type',{
            courseId:courseId,
            studyType:'Flashcard'
        })
        setFlashcards(res.data);
    }
    const handleClick=()=>{
        setIsFlipped(!isFlipped);
    }
  return (
    <div>
      <h2 className="font-bold text-2xl">FlashCards</h2>
      <p>Flashcards: The Ultimate Tool to Lock in Concepts!</p>
      <div className="flex flex-col items-center justify-center mt-10 w-full relative">
  <Carousel className="w-full max-w-xl" setApi={setApi}>
    <CarouselContent>
      {flashcards.content?.map((item, index) => (
        <CarouselItem key={index} className="flex justify-center">
          <Flashcarditem handleClick={handleClick} isFlipped={isFlipped} flashcard={item}/>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Navigation Buttons */}
    <CarouselPrevious className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2" />
    <CarouselNext className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2" />
  </Carousel>
</div>

    </div>
  )
}

export default Flashcards
