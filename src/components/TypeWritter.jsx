'use client';

import Typewriter from 'typewriter-effect';

const TypeWritter = () => {
  return (
   <div className=" text-xs md:text-lg tracking-[0.25em] text-zinc-400 uppercase font-light min-h-[24px]">
      <Typewriter
        options={{
          strings: [
            'Full Stack Developer',
            'Frontend Developer',
            'Backend Developer',
          ], 
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  )
}

export default TypeWritter