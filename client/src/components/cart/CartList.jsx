import React from 'react'
import CartItem from './CartItem'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useQuantity } from '../context/QuantityContext'
import { useAdded } from '../context/AddedContext'

const CartList = () => {
  const {cart, setCart} = useCart()
  const { setAdded } = useAdded()
  const {quantities, incrementQuantity, decrementQuantity, setQuantity} = useQuantity()
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
                <CartItem key={index} img={c.img} title={c.title} ingredients={c.ingredients} price={c.price} deleteCart={deleteCart} 
                incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} quantities={quantities} setQuantity={setQuantity}
                setAdded={setAdded}
                />
              </>
                
            )
        })}

    </motion.section>
  )
}

export default CartList