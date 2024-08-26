import React, { useState } from 'react'
import hero1 from '../../Images/freepik-export-20240615164155O0oM.png'
import hero2 from '../../Images/hero-right-2.png'
import hero3 from '../../Images/Image-section-2_big-600x576.png'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const HomeSectionOne = () => {


  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)


  const handleShowOne = () =>{
    setShow1(true)
    setShow2(false)
    setShow3(false)
  }

  const handleShowTwo = () =>{
    setShow1(false)
    setShow2(true)
    setShow3(false)
  }


  const handleShowThree = () =>{
    setShow1(false)
    setShow2(false)
    setShow3(true)
  }
  return (
    <section className='relative'>

      <p onClick={handleShowOne} className='absolute top-[40vh] left-24 text-3xl cursor-pointer'><FaCircleArrowLeft /></p>
      <p onClick={handleShowThree} className='absolute top-[40vh] right-24 text-3xl cursor-pointer'><FaCircleArrowRight /></p>

      <div className='flex gap-5 items-center absolute bottom-[2rem] right-0 left-0 m-auto justify-center'>
        <p onClick={handleShowOne} className={`w-16 cursor-pointer h-2 rounded-full ${show1 === true ? 'bg-black' : 'bg-white'}`}></p>
        <p onClick={handleShowTwo} className={`w-16 cursor-pointer h-2 rounded-full ${show2 === true ? 'bg-black' : 'bg-white'}`}></p>
        <p onClick={handleShowThree} className={`w-16 cursor-pointer h-2 rounded-full ${show3 === true ? 'bg-black' : 'bg-white'}`}></p>
      </div>


      {show1 === true && 
        <div className='bg-green-100 h-[75vh] pt-20 px-[15rem]  flex items-center' >
          <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
            <p className='pb-5'>In this season, find the best 🔥</p>
            <h2 className='text-7xl font-bold'>Exclusive Collection</h2>
            <h2 className='text-7xl font-bold pt-5'>for Everyone</h2>
            <button className='bg-black text-white rounded-full p-3 px-10 mt-10'>Explore now</button>
          </div>

          <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
            <img src={hero1} alt="" className='w-[150%]'/>
          </div>
        </div>
        }


      {show2 === true && 
        <div className='bg-green-100 h-[80vh] pt-20 px-[15rem]  flex items-center' >

          <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
            <p className='pb-5'>In this season, find the best 🔥</p>
            <h2 className='text-7xl font-bold'>Exclusive Collection</h2>
            <h2 className='text-7xl font-bold pt-5'>for Everyone</h2>
            <button className='bg-black text-white rounded-full p-3 px-10 mt-10'>Explore now</button>
          </div>

          <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
            <img src={hero2} alt="" className='w-[100%]'/>
          </div>
        </div>
      }


      {show3 === true &&
        <div className='bg-green-100 h-[80vh] pt-20 px-[15rem]  flex items-center' >

          <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
            <p className='pb-5'>In this season, find the best 🔥</p>
            <h2 className='text-7xl font-bold'>Exclusive Collection</h2>
            <h2 className='text-7xl font-bold pt-5'>for Everyone</h2>
            <button className='bg-black text-white rounded-full p-3 px-10 mt-10'>Explore now</button>
          </div>

          <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
            <img src={hero3} alt="" className='w-[100%]'/>
          </div>
        </div>
      }
    </section>
  )
}

export default HomeSectionOne
