'use client';
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';

import img from '../../src/assets/mainimgaehd.png'
import PrimaryBtn from '@/atomes/PrimaryBtn';
import ExperienceBlock from '@/atomes/ExperienceBlock';
import { HeadingWithAfter, BigSubHeading } from '@/atomes/Heading';
import LearningPath from '@/atomes/LearningPath';
import Services from '@/molecules/Services';
import Projects from '@/molecules/Projects';

import Blogs from '@/molecules/Blogs';
import ContactUs from '@/molecules/ContactUs';
import Footer from './Footer';
import About from '@/molecules/About';
import gsap from 'gsap';
import { Brandslider } from '@/molecules/Testimonial';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from '@/molecules/Skills';

gsap.registerPlugin(ScrollTrigger);



export function handleDownload() {
    const fileUrl = '/sarjeet kumawat react developer.pdf';
    const link = document.createElement("a");
    link.href = fileUrl; 
    link.download = "Sarjeet resume.pdf"; 
    link.click();
  };


function WlcSection() {
  const element = useRef(null);

  useEffect(() => {
    gsap.to(element.current, {
      y: 25, duration: 4, yoyo: true, repeat: -1, ease: "power1.inOut",
    })
    const nameani = document.querySelector('.animated-heading');
    
    
    gsap.fromTo(
      nameani,
      {
        backgroundSize: '0% 100%', 
        backgroundPosition: 'left center', 
      },
      {
        backgroundSize: '100% 100%', 
        duration: 1.5, 
        ease: 'power2.out', 
        onComplete: () => {
          
          gsap.to(nameani, {
            backgroundSize: '100% 100%', 
            backgroundPosition: 'right center', 
            duration: 1, 
            ease: 'power2.in', 
          });
        },
      }
    );

  }, [])

  



  return (
    <div className="img_section relative max-w-[1700px] w-full mx-auto">
      <div ref={element} className='flex justify-center absolute lgmax:left-0 lgmax:right-0 right-[55px] z-[-10] lgmax:w-full lg:h-[720px]'>
        <Image src={img} alt='profile image' priority={true} fetchPriority="high" className='max-h-full w-auto h-full' />
      </div>
      <div className='pt-[350px] smlmax:grid gap-6'>
        <div className='z-[10] sml:ps-[5%] mdmax:px-5 '>
          <h2 className='lg:text-[36px] text-[24px] h-[44px] lgmax:content-end font-semibold ps-2 uppercase w-min whitespace-nowrap 
          after:py-2 after:content-[""] after:block after:h-full after:w-[73%] after:bg-[#ffc454] after:absolute after:top-0 after:z-[-2] after:left-0  relative'>
            <span className='text-[#fff]'>HELLO!</span> Stranger!</h2>
          <h2 className='animated-heading lg:text-[72px] text-[42px] text-green-800 font-bold leading-none lg:my-4 my-2 '>Mr. Sarjeet Kumawat</h2>
          <p className='ps-2 lg:text-[32px] relative text-[24px] smlmax:text-lg
          after:content-[""] after:block after:h-full after:w-[3px] after:bg-blue-400 after:rounded after:absolute after:start-0 after:top-0 '>Freelance Web Developer</p>
          <div className="btn mt-8 flex space-x-4">
            <PrimaryBtn event={handleDownload}>Download Cv</PrimaryBtn>
            <PrimaryBtn event={() => {const contactElement = document.querySelector("#contact");if (contactElement) {contactElement.scrollIntoView({ behavior: "smooth" });}}}
              >Send Massege</PrimaryBtn>
          </div>
        </div>
        <div className='flex sml:justify-end justify-center smlmax:-translate-y-6 sml:pe-[28%] smlmax:order-first'>
          <PrimaryBtn event={() => {const contactElement = document.querySelector("#contact");if (contactElement) {contactElement.scrollIntoView({ behavior: "smooth" });}}}>Hire Me</PrimaryBtn>
        </div>
      </div>


    </div>
  )
}

export default function MainSection() {
  useEffect(() => {
    gsap.utils.toArray(".animate-on-scroll").forEach((element:any) => {
      gsap.fromTo(
        element,
        {
          opacity: 0, 
          y: 75, 
        },
        {
          opacity: 1, 
          y: 0, 
          duration: 2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: element, 
            start: "top 75%", 
            toggleActions: "play none none none", 
          },
        }
      );
    });
  }, []);

  return (
    <div className='md:ml-[126px] flex flex-col lg:space-y-[100px] space-y-12'>
      <WlcSection />
      <About />
      <div className="education animate-on-scroll">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Learning</HeadingWithAfter>
          <BigSubHeading>My Education</BigSubHeading>
        </div>
        <LearningPath />
      </div>
      <div className="experience animate-on-scroll">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Involvement</HeadingWithAfter>
          <BigSubHeading>My Experience</BigSubHeading>
        </div>

        <ExperienceBlock />
      </div>

      
        <Skills />
        
      <div className="services bg-[#fff] animate-on-scroll">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Take a look</HeadingWithAfter>
          <BigSubHeading>My Services</BigSubHeading>
        </div>
        <Services />
      </div>


      <div id='Portfolio' className="projects bg-[#fff] animate-on-scroll">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Quality Work</HeadingWithAfter>
          <BigSubHeading>My Projects</BigSubHeading>
        </div>
        <Projects />
      </div>
      {/* <div id="Testimonials" className="clinents py-10 relative
          after:content-[''] after:block after:h-[300px] after:w-[300px] after:bg-green-300 after:absolute after:end-[0] after:z-[-1] after:top-0
          before:content-[''] before:block before:h-[300px] before:w-[300px] before:bg-green-300 before:absolute before:start-0 before:z-[-1] before:bottom-0
        ">
        <div className='text-center mb-12'>
          <HeadingWithAfter>Testimonial</HeadingWithAfter>
          <BigSubHeading>words from client</BigSubHeading>
        </div>
        <Testimonial />
      </div> */}

      <div className="news-blog bg-[#eee] py-10 animate-on-scroll">
        <div className='text-center mb-12'>
          <HeadingWithAfter>My Blog</HeadingWithAfter>
          <BigSubHeading>Recent News</BigSubHeading>
        </div>
        <Blogs />
      </div>
      <Brandslider />

      <div className="contact bg-[#fff] animate-on-scroll" id='contact'>
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
