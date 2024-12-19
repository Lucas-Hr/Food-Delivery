import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <Link to="/">Accueil</Link>
      <Link to="/menu" className='cursor-pointer'>Menu</Link>
      <Link to="/cart" className='cursor-pointer'>Cart</Link>
    </>
  )
}

export default Navbar
