import { useState } from 'react'
import Navigationbar from '../components/home/NavigationBar'
import FoodList from '../components/menu/FoodList'
import Footer from '../components/home/Footer'
const Menu = ({item}) => {

  return (
    <>
      <FoodList/>
      <Footer />
    </>
  )
}

export default Menu
