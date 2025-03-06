import { useState } from 'react'
import Navbar from '../component/NavigationBar'
import FoodList from '../component/FoodList'
import Footer from '../component/Footer'
const Menu = () => {

  return (
    <>
      <Navbar />
      <FoodList />
      <Footer />
    </>
  )
}

export default Menu
