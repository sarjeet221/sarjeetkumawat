import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../src/assets/halfside.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { HeadingWithAfter } from '@/atomes/Heading';
import PrimaryBtn from '@/atomes/PrimaryBtn';
import { handleDownload } from '@/organism/MainSection';


export default function About() {
  const [pivisiblity, setpivisiblity] = useState<boolean>(false)
  const pi = [{
    "Age": 23, "Address": "Sumer nagar, mansarover, jaipur, India (302020)", "email": "sarjeetkumawatxxx@gmail.com", "Residance": "India", "Mobile": "85xx8x83xx"
  }]

  function pishow() {
    // pivisiblity ? setpivisiblity(false) : setpivisiblity(true);
    setpivisiblity(!pivisiblity);
  }
  return (
    <div id='About' className='aboutme lg:px-8 px-5 sml:max-w-[500px] md:max-w-[650px] w1200:max-w-[1700px] mx-auto animate-on-scroll'>
      <div className='flex w1200max:flex-col lg:space-x-5 lg:mb-10'>
        <div className='basis-4/12'>
          <div className=' relative flex justify-center bg-green-300 lg:ms-10 md:ms-8 after:hidden after:content-[""] after:md:block after:h-full after:w-full after:border-4 after:border-green-500 after:absolute after:start-[-30px] after:z-[-3] after:top-8'>
            <Image src={img} width={2063} height={3300} className='w-auto h-full max-h-[300px] lg:max-h-[450px]'  alt='about' unoptimized />
            <div className={`${pivisiblity ? "block" : "hidden"} absolute bg-[rgb(0_0_0/88%)] h-full w-full top-0 sml:p-6 p-3 text-[white]`}>
              <h2 className='text-xl text-blue-400 font-bold'>Sarjeet Kumawat</h2>
              <p>web developer</p>
              <ul className='sml:my-6 my-3'>
                {Object.entries(pi[0]).map(([key, value], index: any) => {
                  return <li key={index} className='my-2'><span className='inline-block w-[30%] me-2 text-yellow-500'>{key}</span><span>{value}</span></li>
                })}

              </ul>
              <div className='flex space-x-2 text-base'>
                <Link href={"#"} title='test' className='p-2 bg-blue-400 hover:bg-green-500'><FaXTwitter /></Link>
                <Link href={"#"} title='test' className='p-2 bg-blue-400 hover:bg-green-500'><FaWhatsapp /></Link>
                <Link href={"#"} title='test' className='p-2 bg-blue-400 hover:bg-green-500'><FaFacebookF /></Link>
                <Link href={"#"} title='test' className='p-2 bg-blue-400 hover:bg-green-500'><FaInstagram /></Link>
                <Link href={"#"} title='test' className='p-2 bg-blue-400 hover:bg-green-500'><FaLinkedinIn /></Link>
              </div>
            </div>
            <div onClick={pishow} className="absolute top-0 right-0 h-[50px] w-[50px] text-[42px] text-[white] cursor-pointer bg-blue-400 hover:bg-blue-500 flex justify-center items-center">
              {pivisiblity ? "-" : "+"}
            </div>
          </div>
        </div>
        <div className='basis-8/12 lgmax:mt-12'>
          <HeadingWithAfter>About Me</HeadingWithAfter>
          <h3 className='lg:text-[40px] text-2xl text-blue-500 lg:my-4 my-2 font-semibold leading-none'>
            I&apos;m In The IT Industry With 1 Years Of Experience.</h3>
          <p className='text-base text-[#777777] leading-normal font-semibold'>
            Results-driven UI Developer with expertise in building high-performance, user-centric web applications.
            Proficient in modern front-end technologies including React.js, Next.js, TypeScript, HTML, CSS, and SCSS.
            Skilled in optimizing user experiences through performance tools like Google Insights.
            Known for delivering clean, scalable, and responsive
            code while ensuring cross-browser compatibility and adherence to best practices in design and accessibility.
            Passionate about creating innovative digital experiences and continuously staying ahead of industry trends.
          </p>

          <div className='mt-6' >
            <h2 className='text-blue-600 text-lg font-bold'>Sarjeet Kumawat</h2>
            <p className='text-base text-[#777777] leading-normal font-semibold'>React / Frontend Developer</p>
          </div>
          <div className="btn mt-5 flex space-x-4">
            <PrimaryBtn event={handleDownload}>Download Cv</PrimaryBtn>
            <PrimaryBtn event={() => {const contactElement = document.querySelector("#contact");if (contactElement) {contactElement.scrollIntoView({ behavior: "smooth" });}}}>Hire Me</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  )
}
