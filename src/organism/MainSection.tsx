'use client';
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';

import img from '../../src/assets/1000184993-removebg-preview.png'
import PrimaryBtn from '@/atomes/PrimaryBtn';
import ExperienceBlock from '@/atomes/ExperienceBlock';
import { HeadingWithAfter, BigSubHeading } from '@/atomes/Heading';
import LearningPath from '@/atomes/LearningPath';
import Services from '@/molecules/Services';
import Projects from '@/molecules/Projects';
// import Testimonial, { Brandslider } from '@/molecules/Testimonial';
import Blogs from '@/molecules/Blogs';
import ContactUs from '@/molecules/ContactUs';
import Footer from './Footer';
import About from '@/molecules/About';
import gsap from 'gsap';

function WlcSection() {
  const element = useRef(null);

  useEffect(() => {
    gsap.to(element.current, {
      y: 25, duration: 4, yoyo: true, repeat: -1, ease: "power1.inOut",
    })
  }, [])
  return (
    <div className="img_section relative ">
      <div ref={element} className='flex justify-center absolute lgmax:left-0 lgmax:right-0 right-[55px] z-[-10] lgmax:w-full lg:h-[720px]'>
        <Image src={img} alt='profile image' unoptimized fetchPriority="high" className='max-h-full w-auto h-full' />
      </div>
      <div className='pt-[400px] smlmax:grid gap-6'>
        <div className='z-[10] lg:ps-[5%] mdmax:px-5 '>
          <h2 className='lg:text-[36px] text-[24px] h-[44px] lgmax:content-end font-semibold ps-2 uppercase w-min whitespace-nowrap after:py-2 after:content-[""] after:block after:h-full after:w-[73%] after:bg-red-300 after:absolute after:top-0 after:z-[-2] after:left-0  relative'>
            <span className='text-[#fff]'>HELLO!</span> Stranger!</h2>
          <h2 className='lg:text-[72px] text-[42px] text-green-800 font-bold leading-none lg:my-4 my-2 '>Mr. Sarjeet Kumawat</h2>
          <p className='ps-2 lg:text-[32px] relative text-[24px] smlmax:text-lg
          after:content-[""] after:block after:h-full after:w-[3px] after:bg-blue-400 after:rounded after:absolute after:start-0 after:top-0 '>Freelance Front-End Developer</p>
          <div className="btn mt-8 flex space-x-4">
            <PrimaryBtn>Doenload Cv</PrimaryBtn>
            <PrimaryBtn>Send Massege</PrimaryBtn>
          </div>
        </div>
        <div className='flex sml:justify-end justify-center smlmax:-translate-y-10 sml:pe-[28%] smlmax:order-first'>
          <PrimaryBtn>Hire Me</PrimaryBtn>
        </div>
      </div>


    </div>
  )
}

export default function MainSection() {

  return (
    <div className='lg:ml-[130px] flex flex-col lg:space-y-[100px] space-y-12'>
      <WlcSection />
      <About />
      <div className="education">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Learning</HeadingWithAfter>
          <BigSubHeading>My Education</BigSubHeading>
        </div>
        <LearningPath />
      </div>
      <div className="experience">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Involvement</HeadingWithAfter>
          <BigSubHeading>My Experience</BigSubHeading>
        </div>

        <ExperienceBlock />
      </div>
      <div className="services bg-[#fff]">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Take a look</HeadingWithAfter>
          <BigSubHeading>My Services</BigSubHeading>
        </div>
        <Services />

      </div>
      <div className="projects bg-[#fff]">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Quality Work</HeadingWithAfter>
          <BigSubHeading>My Projects</BigSubHeading>
        </div>
        <Projects />
      </div>
      {/* <div className="clinents py-10 relative
          after:content-[''] after:block after:h-[300px] after:w-[300px] after:bg-green-300 after:absolute after:end-[0] after:z-[-1] after:top-0
          before:content-[''] before:block before:h-[300px] before:w-[300px] before:bg-green-300 before:absolute before:start-0 before:z-[-1] before:bottom-0
        ">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Testimonial</HeadingWithAfter>
          <BigSubHeading>words from client</BigSubHeading>
        </div>
        <Testimonial />
      </div> */}

      <div className="news-blog bg-[#eee] py-10">
        <div className='text-center mb-12'>
          <HeadingWithAfter>My Blog</HeadingWithAfter>
          <BigSubHeading>Recent News</BigSubHeading>
        </div>
        <Blogs />
      </div>
      <Brandslider />

      <div className="contact bg-[#fff]">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Contact Us</HeadingWithAfter>
          <BigSubHeading>Get In Touch</BigSubHeading>
        </div>
        <ContactUs />
      </div>

      <Footer />
    </div>
  )
}
