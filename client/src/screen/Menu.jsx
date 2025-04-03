import { useState } from 'react'
import Navigationbar from '../components/NavigationBar'
import FoodList from '../components/FoodList'
import Footer from '../components/Footer'
const Menu = ({item}) => {

  return (
    <>
      <FoodList/>
      <Footer />
    </>
  )
}

export default Menu
