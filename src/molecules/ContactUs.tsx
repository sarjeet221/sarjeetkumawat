import React from 'react'
import address from '@/assets/address.png'
import phoe from '@/assets/phone.png'
import email from '@/assets/email.png'
import Image from 'next/image'
import PrimaryBtn from '@/atomes/PrimaryBtn'

export default function ContactUs() {
    return (

        <div className='mt-12 w-full lg:w-7/12 bg-[white-200] text-center m-auto'>
            <div  className='shadow-[0_0_77px_-4px_#0000001a] rounded py-6 mx-2'>
                <h4 className="text-[28px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                    Contact Me
                </h4>
                <form action="" className='grid sml:grid-cols-2 gap-5 lg:gap-8 lg:mt-12 mt-7 p-5 w-full'>
                    <input type="text" placeholder='Name' className='smlmax:w-full  boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold  ' />
                    <input type="text" placeholder='Last Name' className='smlmax:w-full  boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold  ' />
                    <input type="text" placeholder='Mobile' className='smlmax:w-full  boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold  ' />
                    <input type="email" placeholder='Email' className='smlmax:w-full  boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold  ' />
                    <textarea name="message" id="" cols={5} className='smlmax:mb-4 smlmax:w-full lg:col-span-2 boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold' placeholder='Message'></textarea>

                    {/* <input type="submit" /> */}
                    <PrimaryBtn>submit</PrimaryBtn>
                </form>
            </div>
            <div className='grid sml:grid-cols-3 mt-12 gap-8 '>

                <div>
                    <div className='h-[40px] flex justify-center'>
                        <Image src={address} alt=''></Image>
                    </div>
                    <div className='mt-3'>
                        <h4 className="text-xl sml:text-[26px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                            Address
                        </h4>
                        <p className='text-base font-medium mt-2'>
                            Sumer nagar isckon road, mansarover jaipur(302020)
                        </p>
                    </div>
                </div>
                <div>
                    <div className='h-[40px] flex justify-center'>
                        <Image src={phoe} alt=''></Image>
                    </div>
                    <div className='mt-3'>
                        <h4 className="text-xl sml:text-[26px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                            Phone
                        </h4>
                        <p className='text-base font-medium mt-2'>
                            8559818396
                        </p>
                    </div>
                </div>
                <div>
                    <div className='h-[40px] flex justify-center'>
                        <Image src={email} alt=''></Image>
                    </div>
                    <div className='mt-3'>
                        <h4 className="text-xl sml:text-[26px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                            Email
                        </h4>
                        <p className='text-base font-medium mt-2'>
                            sarjeetkumawat221@gmail.com
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
