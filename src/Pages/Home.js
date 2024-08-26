import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeSectionOne from '../Components/HomeSection/HomeSectionOne'
import HomeSectionTwo from '../Components/HomeSection/HomeSectionTwo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeSectionOne />
      <HomeSectionTwo />
      <Footer />
    </div>
  )
}

export default Home
