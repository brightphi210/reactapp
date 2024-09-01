import React, { useState } from 'react'
import logo from '../Images/logo.14d0e71d.svg'
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


  return (
    <div className='flex justify-between z-40 bg-white border-b border-neutral-200 px-[15rem] py-[20px]'>
      <div>
        <img src={logo} alt="" />
      </div>

      <ul className='flex gap-10 items-center'>
        <li>Men</li>
        <li>Women</li>
        <li>Beauty</li>
        <li>Sports</li>
        <li>Template</li>
        <li className='relative cursor-pointer' onClick={toggleDropdown}>Explore

            {showDropdown === true &&
            <ul data-aos="fade-up" data-aos-duration="500" className='absolute  top-14 flex flex-col gap-3 w-[200px] bg-neutral-100 p-5'>
              <li>Subcategory 1</li>
              <li>Subcategory 2</li>
              <li>Subcategory 3</li>
            </ul>
            }
        </li>
      </ul>

      <div className='flex items-center gap-6'>
        <p className='flex justify-center items-center bg-neutral-200 cursor-pointer rounded-full p-3'><FiSearch /></p>
        <p className='flex justify-center items-center bg-neutral-200 cursor-pointer rounded-full p-3'><IoPersonOutline /></p>
        <p className='flex justify-center items-center bg-neutral-200 cursor-pointer rounded-full p-3'><PiShoppingCartSimpleLight /></p>
      </div>
    </div>
  )
}

export default Navbar
