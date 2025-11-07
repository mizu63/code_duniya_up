import React from 'react'

function Importvideo({jim}) {
  return (
    <div>
       <iframe 
        
       className='w-full md:w-[560px] h-auto md:h-[315px]'
        src={jim.video} 
        // title="YouTube video player" 
        // frameBorder="0" 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        // allowFullScreen
        // className="rounded-lg"
      >{jim.video}</iframe>
    </div>
  )
}

export default Importvideo
