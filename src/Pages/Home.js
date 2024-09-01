import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeSectionOne from '../Components/HomeSection/HomeSectionOne'
import HomeSectionTwo from '../Components/HomeSection/HomeSectionTwo'
import HomeSectionThree from '../Components/HomeSection/HomeSectionThree'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <Footer />
    </div>
  )
}

export default Home
