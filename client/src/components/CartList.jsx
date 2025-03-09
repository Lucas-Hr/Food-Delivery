import React from 'react'
import CartItem from './CartItem'
import Lasagna from '../assets/img/lasagna.jpg'
import { motion } from 'framer-motion'

const CartList = () => {
  const cartItems = [
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
    {
        img : Lasagna,
        name : "Lasagna",
        ingredients : "Tomato, Cheese, Olive",
        price : "100",
        quantity : 1
    },
  ]

  return (
    <motion.section
        className='px-52 pt-36 relative'
        intital={{opacity : 0, y: 200}}
        animate={{opacity : 1, y: 0}}
        transition={{duration : 1}}
    >
        <h1 className='text-center mt-5 mb-5'>Your Cart</h1>
        {cartItems.map((c, index) => {
            return (
                <CartItem key={index} img={c.img} name={c.name} ingredients={c.ingredients} price={c.price} quantity={c.quantity}/>
            )
        })}
    </motion.section>
  )
}

export default CartList