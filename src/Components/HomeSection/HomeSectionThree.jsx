import React, { useState } from 'react'
import { products } from '../mockData';

const HomeSectionThree = () => {

    const [showMen, setShowMen] = useState(true)
    const [showWomen, setShowWomen] = useState(false)
    const [showKids, setShowKids] = useState(false)
    const [showSports, setShowSports] = useState(false)


    const handleMen = () =>{
        setShowMen(true)
        setShowWomen(false)
        setShowKids(false)
        setShowSports(false)
    }


    const handleWoMen = () =>{
        setShowMen(false)
        setShowWomen(true)
        setShowKids(false)
        setShowSports(false)
    }

    const handleKids = () =>{
        setShowMen(false)
        setShowWomen(false)
        setShowKids(true)
        setShowSports(false)
    }

    const handleSports = () =>{
        setShowMen(false)
        setShowWomen(false)
        setShowKids(false)
        setShowSports(true)
    }



    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }


    console.log('This is my cart', cart);
    
  return (
    <div className='p-20 px-[12rem] mt-20'>
        <div className='bg-neutral-100 rounded-lg p-10'>
            <h2 className='text-center text-4xl font-bold py-10'>Start exploring.</h2>
            <div>
                <ul className='flex bg-white shadow-lg w-[80%] items-center p-5 rounded-full gap-10 m-auto justify-center'>
                    <li onClick={handleMen} className={showMen === true ?` bg-black  text-white rounded-full py-2.5 px-8 cursor-pointer` : 'bg-white text-black cursor-pointer'}>Men</li>
                    <li onClick={handleWoMen} className={showWomen === true ?` bg-black  text-white rounded-full py-2.5 px-8 cursor-pointer` : 'bg-white text-black cursor-pointer'}>Women</li>
                    <li onClick={handleKids} className={showKids === true ?` bg-black  text-white rounded-full py-2.5 px-8 cursor-pointer` : 'bg-white text-black cursor-pointer'}>Kids</li>
                    <li onClick={handleSports} className={showSports === true ?` bg-black  text-white rounded-full py-2.5 px-8 cursor-pointer` : 'bg-white text-black cursor-pointer'}>Sports</li>
                    <li onClick={()=>addToCart('Rice')} className='cursor-pointer'>Add Rice</li>
                    <li onClick={()=>addToCart('Beans')} className='cursor-pointer'>Add Beans</li>
                    <li onClick={()=>addToCart('Yam')} className='cursor-pointer'>Add Yam</li>
                    <li className='bg-neutral-200 rounded-full p-2 flex justify-center items-center'>{cart.length}</li>
                </ul>
            </div>


            <div className='grid grid-cols-3 gap-5 mt-20'>

                {products.map((product) => (
                    
                    <div className='bg-white rounded-lg p-10 hover:shadow-2xl cursor-pointer'>

                        <div className='flex items-center'>
                            <div className='w-20 overflow-hidden rounded-full bg-neutral-300'>
                                <img src={product.image} alt="" className='w-20 object-cover'/>
                            </div>
                            <p className='ml-auto'>105 Products</p>
                        </div>

                        <h4 className='pt-10'>Manufacturer</h4>
                        <h2>Backpack</h2>
                        <p className='pt-10'>See Collection</p>
            
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeSectionThree
