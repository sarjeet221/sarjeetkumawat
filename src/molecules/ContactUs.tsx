import React, { useState } from 'react'
import address from '@/assets/address.png'
import phoe from '@/assets/phone.png'
import email from '@/assets/email.png'
import Image from 'next/image'
import PrimaryBtn from '@/atomes/PrimaryBtn'
import { useForm } from 'react-hook-form';


export default function ContactUs() {
    const [responsefromserver,setresponsefromserver] = useState<any>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // async function sendData(data: object) {
    //     try {
    //         const response = await fetch("https://node-backend-six-zeta.vercel.app/data/", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const result = await response.text();
    //         console.log("Request data:", data);
    //         console.log("Response from server:", result);
    //         setresponsefromserver(result)

    //     } catch (error: any) {
    //         console.log("Error occurred while sending data:", error.message);
    //     }
    // }

    const onSubmit = async (data:any) => {
        try {
            const response = await fetch('/api/save-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log('Form data saved:', result.url);
                setresponsefromserver(result.message)
            } else {
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };
    return (

        <div className='mt-12 w-full lg:w-7/12 bg-[white-200] text-center m-auto'>
            <div className='shadow-[0_0_77px_-4px_#0000001a] rounded py-6 mx-2'>
                <h4 className="text-[28px] text-blue-400 font-semibold relative text-center flex justify-center
                    after:content-[''] after:block after:h-[2px] after:w-[100px] after:bg-green-300 after:absolute  after:bottom-0">
                    Contact Me
                </h4>

                <form className="grid sml:grid-cols-2 gap-5 lg:gap-8 lg:mt-12 mt-7 p-5 w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: 'Name is required' })}
                        className="smlmax:w-full boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        {...register('lastName', { required: 'Last Name is required' })}
                        className="smlmax:w-full boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold"
                    />

                    <input
                        type="text"
                        placeholder="Mobile"
                        {...register('mobile', {
                            required: 'Mobile number is required',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Mobile number must be 10 digits',
                            },
                        })}
                        className="smlmax:w-full boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                message: 'Invalid email format',
                            },
                        })}
                        className="smlmax:w-full boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold"
                    />

                    <textarea
                        placeholder="Message"
                        {...register('message', { required: 'Message is required' })}
                        cols={5}
                        className="ssmlmax:w-full sml:col-span-2 boder-0 outline-none border-b border-[#ddd] lg:pb-5 pb-3 lg:placeholder:text-xl placeholder:text-sm placeholder:font-semibold"
                    ></textarea>

                    <div className='sml:col-span-2 text-left'>
                        {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
                        {errors.lastName && <p className="text-red-500 text-sm">{String(errors?.lastName?.message)}</p>}
                        {errors.mobile && <p className="text-red-500 text-sm">{String(errors.mobile.message)}</p>}
                        {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
                        {errors.message && <p className="text-red-500 text-sm">{String(errors.message.message)}</p>}
                        {responsefromserver && <p className="text-green-500 text-sm">{responsefromserver}</p>}
                        
                    </div>
                    <PrimaryBtn event={handleSubmit(onSubmit)}>submit</PrimaryBtn>
                </form>
            </div>


            <div className='grid sml:grid-cols-3 mt-12 gap-y-8 px-1 '>

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
                        Sumer nagar, mansarover, jaipur, India (302020)
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
                            85xx8x83xx
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
                        <p className='text-base font-medium mt-2 break-all	'>
                            sarjeetkumawatxxx@gmail.com
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
