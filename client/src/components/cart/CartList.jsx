import React from 'react'
import CartItem from './CartItem'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

const CartList = () => {
  const {cart, setCart} = useCart()
  const deleteCart = (title) => {
    setCart(cart.filter(c => c.title !== title))
  }
  return (
    <motion.section
        className='px-52 pt-36 relative'
        intital={{opacity : 0, y: 200}}
        animate={{opacity : 1, y: 0}}
        transition={{duration : 1}}
    >
        <h1 className='text-center mt-5 mb-5'>Your Cart</h1>
        {cart.map((c, index) => {
            return (
              <>
                <CartItem key={index} img={c.img} title={c.title} ingredients={c.ingredients} price={c.price} quantity={c.quantity} deleteCart={deleteCart} />
              </>
                
            )
        })}

    </motion.section>
  )
}

export default CartList