import React from 'react'
import ReactCardFlip from 'react-card-flip'

function Flashcarditem({isFlipped, handleClick,flashcard}) {
  return (
    <div className="flex items-center justify-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="p-4 bg-primary text-white flex items-center justify-center h-[250px] w-[200px] cursor-pointer rounded-lg 
        md:h-[350px] md:w-[300px] shadow-lg" onClick={handleClick}>
        <h2>  {flashcard.front}</h2>
        </div>

        <div className="p-4 bg-white text-black flex items-center justify-center h-[250px] w-[200px] cursor-pointer rounded-lg 
        md:h-[350px] md:w-[300px] shadow-lg" onClick={handleClick}>
         <h2> {flashcard.back}</h2>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default Flashcarditem
