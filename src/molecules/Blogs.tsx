import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaComments, FaLongArrowAltRight, FaUserEdit } from "react-icons/fa";
import frontend from '@/assets/frontend blog.jpg'
import google from '@/assets/speed insigts blog.png'
import react from '@/assets/react blog.png'


export default function Blogs() {
    const blog = [
        {
            "img": google ,
            "date": "03 Jan 2025",
            "title": "optimize web page performance",
            "summry": "Optimizing web page performance is crucial to delivering a fast, responsive, and user-friendly experience. High-performance websites not only improve user engagement but also positively impact search engine rankings and conversions. The optimization process focuses on reducing page load times, minimizing resource usage, and ensuring smooth interactions.",
            "url": "/url",
            "author": "sarjeet kumawat",
            "commentcount": "30",
        },
        {
            "img": react,
            "date": "23 Nov 2024",
            "title": "React.js Basics",
            "summry": "React.js is a popular JavaScript library for building interactive, component-based user interfaces, primarily for single-page applications (SPAs). Developed by Facebook, React emphasizes declarative programming and efficient rendering through a virtual DOM.",
            "url": "/url",
            "author": "sarjeet kumawat",
            "commentcount": "20",
        },
        {
            "img": frontend,
            "date": "28 Dec 2024",
            "title": "Web Development for Beginners",
            "summry": "Web development is the process of creating websites and web applications that run on the internet. It involves two main aspects: frontend development (what users see and interact with) and backend development (the behind-the-scenes processes that power a website). Beginners can start by focusing on the basics and progressively advancing to more complex topics.",
            "url": "/url",
            "author": "sarjeet kumawat",
            "commentcount": "60",
        },

    ]

    return (
        <div className='grid lg:grid-cols-3 lg:grid-rows-2 px-5 gap-5'>
            {blog.map((data: any, key: number) => {
                return (
                    <div className='card row-span-2 bg-[#fff] shadow-[0_0px_30px_0_gba(0,0,0,0.08)] rounded' key={key}>
                        <div className='h-[200px]'>
                            <Image src={data.img} alt={data.title} height={245} width={400} className='h-full w-auto m-auto'></Image>
                        </div>
                        <div className='p-5'>
                            <p className='text-blue-400 text-base'>{data.date}</p>
                            <h3 className='text-2xl text-green-600 my-1 font-medium capitalize'>
                                {data.title}
                            </h3>
                            <div className='flex space-x-2 items-center'><FaUserEdit /> <span className='capitalize'>By {data.author}</span> <span>|</span><span><FaComments /></span>  <span>{data.commentcount}</span></div>
                            <p className='leading-5 my-1 stext-[#777777]'>{data.summry}</p>
                            <Link href={data.url} title="" className='flex items-center text-red-400 font-semibold w-min whitespace-nowrap'>Read More &nbsp; <FaLongArrowAltRight /></Link>
                        </div>

                    </div>
                )
            })}

            {/* <div className='card col-span-2 lg:flex'>
                <div className='h-[200px]'>
                    <Image src={img} alt='' className='h-full w-auto'></Image>
                </div>
                <div>
                    <p>25 December 2024</p>
                    <h3>
                        new smartphone for this segment
                    </h3>
                    <div><FaUserEdit /> By Admin | <FaComments /> 50</div>
                    <p>this this sfshaskudfhis asiiuhgoiasugf sdfgsd fiusdgf osdgf sgf osygfjasdfgousdfg oasdsufgosuygf soufgs</p>
                    <Link href="" title="">Read More <FaLongArrowAltRight /></Link>
                </div>

            </div>
            <div className='card col-span-2 lg:flex'>
                <div className='h-[200px]'>
                    <Image src={img} alt='' className='h-full w-auto'></Image>
                </div>
                <div>
                    <p>25 December 2024</p>
                    <h3>
                        new smartphone for this segment
                    </h3>
                    <div className='flex'><FaUserEdit /> By Admin | <FaComments /> 50</div>
                    <p>this this sfshaskudfhis asiiuhgoiasugf sdfgsd fiusdgf osdgf sgf osygfjasdfgousdfg oasdsufgosuygf soufgs</p>
                    <Link href="" title="">Read More <FaLongArrowAltRight /></Link>
                </div>

            </div> */}

        </div>
    )
}
