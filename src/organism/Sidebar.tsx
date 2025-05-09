"use client"
import Icon from '@/atomes/Icon';
// import SidebarmenuTab from '@/atomes/SidebarmenuTab';
import Image from 'next/image';
import React, {  useRef, useState } from 'react';
import { FaLinkedinIn, FaNewspaper, FaXTwitter } from "react-icons/fa6";
import { PiSuitcaseSimple } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { FaQuoteLeft } from "react-icons/fa";
// import img from '../../src/assets/IMG_20250112_210521.png'
import img from '../../src/assets/newsildbar.png'
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { RiMenuAddLine } from "react-icons/ri";
import { gsap } from "gsap";
import { SlClose } from "react-icons/sl";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleSidebar = () => {
    if (isOpen) {
      gsap.to(sidebarRef.current, { duration: 1, x: "-250px", ease: "power2.out" });
    } else {
      gsap.to(sidebarRef.current, { duration: 0.5, x: "0px", ease: "power2.out" });
    }

    setIsOpen(!isOpen);
  };

  // const handleClickOutside = (event:MouseEvent) => {
  //   if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
  //     gsap.to(sidebarRef.current, { duration: 0.5, x: "-250px", ease: "power2.out" });
  //     setIsOpen(false);
  //     console.log("outslide slcikc hendal ++===============",isOpen)
  //   }
  // };

  // // Attach event listener for clicks
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]);

  return (<>
    <div onClick={toggleSidebar} className={`${isOpen && ""} menu md:hidden fixed top-0 end-0 text-2xl z-10 pt-3 pe-5 text-white`}>
      
      <div className='p-1 bg-[#00800059] rounded '>
        {isOpen ?<SlClose />:
      <RiMenuAddLine />}
        </div>

    </div>

    <div ref={sidebarRef} className={`mdmax:translate-x-[-250px] block  !z-[10] h-[100vh] bg-white overflow-hidden overflow-y-auto fixed left-0 top-0 bg-[#eee] thin_scrollbar`}>
      
      <div className='h-[90px] w-[90px] rounded-full overflow-hidden m-auto my-8 bg-green-400'>
        <Image src={img} alt='profile image' unoptimized width={90} height={90} />
      </div>

      {/* <SidebarmenuTab title='test' link='test' img='' /> */}
      <div className="sidemenu">
        <Icon text='About'>
          <FaNewspaper />
        </Icon>
        <Icon text='Portfolio'>
          <PiSuitcaseSimple />
        </Icon>
        <Icon text='Testimonials'>
          <FaQuoteLeft />
        </Icon>
        <Icon text='contact'>
          <LuPhoneCall />
        </Icon>
      </div>

      <div>
        <div className='after:content-[""] after:h-[70px] after:w-[1px] after-mt-2 after:block after:bg-red-500 after:m-auto'>
          <p className='-rotate-90 text-center font-bold text-blue-500 whitespace-nowrap h-[95px] flex justify-center items-center'>Follow Us</p>
        </div>

        <div className='text-2xl text-blue-300 flex flex-col space-y-4 justity-center items-center my-5'>
          <Link href={"https://www.facebook.com"} target='_blank' className='hover:text-blue-500'>
            <FaFacebookF />
          </Link>
          <Link href={"https://web.whatsapp.com"} target='_blank' className='hover:text-blue-500'>
            <FaWhatsapp />
          </Link>
          <Link href={"https://www.linkedin.com/in/sarjeet-prajapati-8929861b8"} target='_blank' className='hover:text-blue-500'>
            <FaLinkedinIn />
          </Link>
          <Link href={"https://x.com/sarjeet_kumawat"} target='_blank' className='hover:text-blue-500'>
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </div > </>
  );
}
