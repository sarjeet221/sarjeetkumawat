import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaComments, FaLongArrowAltRight, FaUserEdit } from "react-icons/fa";
import img from '@/assets/1000181369.png'


export default function Blogs() {
    const blog = [
        {
            "img": "",
            "date": "25 jan 2024",
            "title": "Title one is importen",
            "summry": "hj h hkjhiuh kuhiuu ghk ku khk hug k g  gubu  guuuy uyguygytdutrdu fut dugciytc utc utc ",
            "url": "/url",
            "author": "admin",
            "commentcount": "30",
        },
        {
            "img": "",
            "date": "21 jan 2024",
            "title": "Title second is importen",
            "summry": "hj h hkjhiuh kuhiuu ghk ku khk hug k g  gubu  guuuy uyguygytdutrdu fut dugciytc utc utc ",
            "url": "/url",
            "author": "admin",
            "commentcount": "20",
        },
        {
            "img": "",
            "date": "28 jan 2024",
            "title": "Ye to thired is importen",
            "summry": "hj h hkjhiuh kuhiuu ghk ku khk hug k g  gubu  guuuy uyguygytdutrdu fut dugciytc utc utc ",
            "url": "/url",
            "author": "admin",
            "commentcount": "60",
        },

    ]

    return (
        <div className='grid lg:grid-cols-3 lg:grid-rows-2 px-5 gap-5'>
            {blog.map((data: any, key: number) => {
                return (
                    <div className='card row-span-2 bg-[#fff] shadow-[0_0px_30px_0_gba(0,0,0,0.08)] rounded' key={key}>
                        <div className='h-[200px]'>
                            <Image src={img} alt='' className='h-full w-auto m-auto'></Image>
                        </div>
                        <div className='p-5'>
                            <p className='text-blue-400 text-base'>{data.date}</p>
                            <h3 className='text-2xl my-1 font-medium'>
                                {data.title}
                            </h3>
                            <div className='flex space-x-2 items-center text-green-600'><FaUserEdit /> <span>By {data.author}</span> <span>|</span><span><FaComments /></span>  <span>{data.commentcount}</span></div>
                            <p className='leading-none my-1 text-green-900'>{data.summry}</p>
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
