import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import brand from '@/assets/port_footer03.png'

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
        <div className='px-8 py-12 bg-blue-700'>
            <Swiper                
                slidesPerView={5}
            >
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={brand} alt="" className='m-auto'></Image>
                </SwiperSlide>

            </Swiper>
        </div >



    )
}