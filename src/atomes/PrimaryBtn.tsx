import gsap from 'gsap';
import React, {useRef } from 'react'

export default function PrimaryBtn({ children,event }: { children: any, event?:any }) {
  const boxRef =  useRef(null);
  const text =  useRef(null);
  const handleMouseEnter = () => {
    // gsap.to(boxRef?.current, { x: 15, duration: 1 });
    gsap.to(boxRef?.current,{x:200})
    // gsap.to(text?.current, {color:"#CC99F5"})
  };
  const handleMouseLeave = () => {
    // gsap.to(boxRef?.current, { x: 0, duration: 1 });
    gsap.to(boxRef?.current,{x:0})
    // gsap.to(text?.current, {color:"white"})


  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={event} 
    className={`relative rounded-full overflow-hidden font-semibold text-white cursor-pointer text-center w-max lg:min-w-[150px] min-w-[100px] lg:px-6 px-4 lg:py-4 py-2 bg-green-500 inline-block whitespace-nowrap transition-all duration-300 ease-in-out shadow-[0px_8px_20px_0px_rgba(255,117,74,0.3)] hover:shadow-[0px_8px_20px_0px_rgba(0,200,218,0.3)]
    `}>
      <span ref={boxRef} className='btnanimation block h-[140%] opacity-20 w-[30px] bg-white absolute rotate-[21deg] top-[-22%] left-[-35px]'></span>
      <button ref={text}  className='text-[16px] align-middle' >
        {children}
      </button>

    </div>
  )
}
