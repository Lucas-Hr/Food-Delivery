import { useState } from 'react'
import Navbar from '../component/NavigationBar'

const Cart = () => {

  return (
    <>
      <Navbar />
      <h1 className='text-center fw-semibold mt-5'>Your Cart</h1>
      <select name="" id="">
        <option value="">Name</option>
      </select>
    </>
  )
}

export default Cart
