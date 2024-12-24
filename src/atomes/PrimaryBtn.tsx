import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

export default function PrimaryBtn({ children }: { children: any }) {
  const boxRef =  useRef(null);
  const handleMouseEnter = () => {
    gsap.to(boxRef?.current, { x: 15, duration: 1 });
  };
  const handleMouseLeave = () => {
    gsap.to(boxRef?.current, { x: 0, duration: 1 });
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={`rounded-full font-semibold text-white cursor-pointer text-center lg:min-w-[150px] min-w-[100px] lg:px-6 px-4 lg:py-4 py-2 bg-green-500 hover:bg-blue-400 inline-block whitespace-nowrap transition-all duration-300 ease-in-out shadow-[0px_8px_20px_0px_rgba(255,117,74,0.3)] hover:shadow-[0px_8px_20px_0px_rgba(0,200,218,0.3)]`}>
      <button ref={boxRef} className='text-[16px] align-middle' >
        {children}
      </button>

    </div>
  )
}
