import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import a from '../../Images/1.webp'
import { products } from '../mockData';
const HomeSectionTwo = () => {

    console.log('THis is product Data', products);
    
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

        <div className='pt-20'>
            <h2 className='text-3xl'>New Arrivals. REY backpacks & bags</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {products.map((product, index)=>(
                    <SwiperSlide key={index}>

                        <div className='text-left  rounded-lg mt-10'>
                            <div className='p-5 bg-blue-50 w-full rounded-lg h-[20rem]'>
                                <img src={product?.image} alt="" className='w-full'/>
                            </div>
                            
                            {product?.dataType === 'line' && 
                            <ul className='flex items-center gap-3 pt-5'>
                                <li className='bg-green-500 rounded-full h-2 w-10 flex items-center justify-center'></li>
                                <li className='bg-green-500 rounded-full h-2 w-10 flex items-center justify-center'></li>
                                <li className='bg-green-500 rounded-full h-2 w-10 flex items-center justify-center'></li>
                                <li className='bg-green-500 rounded-full h-2 w-10 flex items-center justify-center'></li>
                            </ul>
                            }

                            {product?.dataType === 'circle' && 
                            <ul className='flex items-center gap-3 pt-5'>
                                <li className='bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center'></li>
                                <li className='bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center'></li>
                                <li className='bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center'></li>
                                <li className='bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center'></li>
                            </ul>
                            }

                            <div>
                                <h2 className='pt-4 pb-3 font-semibold'>{product.name}</h2>
                                <p>{product.description}</p>
                                <p className='border-2 w-fit mt-3 rounded-md border-green-500 p-2 px-5 text-xs text-green-500'>{product.price}</p>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default HomeSectionTwo
