import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../src/assets/1000184993-removebg-preview.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { HeadingWithAfter } from '@/atomes/Heading';
import PrimaryBtn from '@/atomes/PrimaryBtn';


export default function About() {
  const [pivisiblity, setpivisiblity] = useState<boolean>(false)
  const pi = [{
    "Age": 23, "Address": "sumeer nagar mansarodver", "email": "sarjeet@gmail.com", "Residance": "India", "phonme": "8559818396"
  }]

  function pishow() {
    pivisiblity ? setpivisiblity(false) : setpivisiblity(true);
  }
  return (
    <div className='aboutme lg:px-8 px-5'>
      <div className='flex lgmax:flex-col lg:space-x-5 lg:mb-10'>
        <div className='basis-4/12'>
          <div className=' relative py-10 bg-green-300 lg:ms-10 ms-8 after:content-[""] after:block after:h-full after:w-full after:border-4 after:border-green-500 after:absolute after:start-[-30px] after:z-[-3] after:top-8'>
            <Image src={img} alt='about' unoptimized />
            <div className={`${pivisiblity ? "block" : "hidden"} absolute bg-[rgb(0_0_0/88%)] h-full w-full top-0 p-6 text-[white]`}>
              <h2 className='text-xl text-blue-400 font-bold'>Sarjeet Kumawat</h2>
              <p>web developer</p>
              <ul className='my-6'>

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
            <div onClick={pishow} className="absolute bottom-0 left-0 h-[50px] w-[50px] text-[42px] text-[white] cursor-pointer bg-blue-600 hover:bg-green-400 flex justify-center items-center">
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
            <PrimaryBtn>Doenload Cv</PrimaryBtn>
            <PrimaryBtn>Hire Me</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  )
}
