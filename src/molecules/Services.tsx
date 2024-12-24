import React from 'react'
import Image from 'next/image'
import icon from '@/assets/port_footer03.png'

export default function Services() {
    return (
        <div className='grid sml:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>

            <div className='flex flex-col justify-center items-center border-[rgb(235,235,235)] border hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)] hover:!border-[#00000000] transition p-7 cursor-pointer'>
                <div>
                    <Image src={icon} alt=''></Image>
                </div>
                <div className='mt-4'>
                    <h4 className="text-[28px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                        marketing
                    </h4>
                    <p className='text-base font-medium mt-3'>
                        this is ;;marketing from here
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center border-[rgb(235,235,235)] border hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)] hover:!border-[#00000000] transition p-7 cursor-pointer'>
                <div>
                    <Image src={icon} alt=''></Image>
                </div>
                <div className='mt-4'>
                    <h4 className="text-[28px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                        marketing
                    </h4>
                    <p className='text-base font-medium mt-3'>
                        this is ;;marketing from here
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center border-[rgb(235,235,235)] border hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)] hover:!border-[#00000000] transition p-7 cursor-pointer'>
                <div>
                    <Image src={icon} alt=''></Image>
                </div>
                <div className='mt-4'>
                    <h4 className="text-[28px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                        marketing
                    </h4>
                    <p className='text-base font-medium mt-3'>
                        this is ;;marketing from here <br />lhgj jyg jhg kuyf u
                    </p>
                </div>
            </div>


        </div>
    )
}
