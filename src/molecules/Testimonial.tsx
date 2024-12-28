import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import amazon from '@/assets/amazon.png'
import microsoft from '@/assets/microsoft.png'
import shoppe from '@/assets/shoppe.png'
import nike from '@/assets/nike.png'
import accenture from '@/assets/accenture.png'

export default function Testimonial() {
    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    return (
        <div className='w-9/12 border-2 border-blue-400 m-auto relative flex justify-center mb-[100px]'>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                controller={{ control: swiper2Ref?.current }}
                ref={swiper1Ref}
            >
                <SwiperSlide>
                    <div className='w-full relative flex justify-center h-[400px]'>
                        <video src="thtdhthhd"></video>

                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='w-10/12 absolute p-10 text-center bottom-[-17%] text-base font-medium text-green-600 bg-[white] m-auto'>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    controller={{ control: swiper1Ref?.current }}
                    ref={swiper2Ref}
                >
                    <SwiperSlide>
                        khpkh iuh piugpiu gpgpiugpi uypi gpyg puygp igiug piug piug piygpi ugpu yg oiugouyg piug piugp i
                    </SwiperSlide>

                </Swiper> </div>
        </div>
    );
}

export function Brandslider() {
    return (
        <div className='px-8 py-12 w-full max-w-[1700px] mx-auto animate-on-scroll'>
            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                }}
            >
                {[amazon, nike, microsoft, shoppe, accenture].map((data,key) => {
                    return (
                        <SwiperSlide className='items-center my-auto' key={key}>
                            <Image src={data} alt="" className='m-auto w-full'></Image>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >



    )
}
