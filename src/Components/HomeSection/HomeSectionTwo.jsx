import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import a from '../../Images/1.webp'

const HomeSectionTwo = () => {
  return (
    <div className='px-[15rem] my-20'>
        <h2 className='text-4xl font-semibold pb-5'>Discover more. Good things are waiting for you</h2>
        <>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='flex items-center text-left p-10 bg-blue-50 rounded-lg'>
                    <div className='w-full'>
                        <p>Explore new Arrivals</p>
                        <h2 className='text-2xl pt-4 font-bold'>Shop the latest <br /> from top brand</h2>
                        <button className='bg-black text-white p-2 px-5 text-sm rounded-full mt-10'>show me all</button>
                    </div>

                    <div>
                        <img src={a} alt="" className='w-[30%]'/>
                    </div>
                </div>
                
            </SwiperSlide>
            

            <SwiperSlide>
                <div className='flex items-center text-left p-10 bg-red-50 rounded-lg'>
                    <div className='w-full'>
                        <p>Explore new Arrivals</p>
                        <h2 className='text-2xl pt-4 font-bold'>Shop the latest <br /> from top brand</h2>
                        <button className='bg-black text-white p-2 px-5 text-sm rounded-full mt-10'>show me all</button>
                    </div>

                    <div>
                        <img src={a} alt="" className='w-[30%]'/>
                    </div>
                </div>
                
            </SwiperSlide>


            <SwiperSlide>
                <div className='flex items-center text-left p-10 bg-green-50 rounded-lg'>
                    <div className='w-full'>
                        <p>Explore new Arrivals</p>
                        <h2 className='text-2xl pt-4 font-bold'>Shop the latest <br /> from top brand</h2>
                        <button className='bg-black text-white p-2 px-5 text-sm rounded-full mt-10'>show me all</button>
                    </div>

                    <div>
                        <img src={a} alt="" className='w-[30%]'/>
                    </div>
                </div>
                
            </SwiperSlide>


            <SwiperSlide>
                <div className='flex items-center text-left p-10 bg-purple-50 rounded-lg'>
                    <div className='w-full'>
                        <p>Explore new Arrivals</p>
                        <h2 className='text-2xl pt-4 font-bold'>Shop the latest <br /> from top brand</h2>
                        <button className='bg-black text-white p-2 px-5 text-sm rounded-full mt-10'>show me all</button>
                    </div>

                    <div>
                        <img src={a} alt="" className='w-[30%]'/>
                    </div>
                </div>
                
            </SwiperSlide>
        </Swiper>
        </>
    </div>
  )
}

export default HomeSectionTwo
