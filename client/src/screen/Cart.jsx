import Footer from '../components/home/Footer'
import CartList from '../components/cart/CartList'
import Payment from '../components/cart/Payment'
import { useCart } from '../components/context/CartContext'
import { useEffect, useState } from 'react'
import { useQuantity } from '../components/context/QuantityContext'
const Cart = () => {
  const {cart} = useCart()
  const {quantities} = useQuantity()
  const totalPrice = cart.reduce((acc, item) => {
    const quantity = quantities[item.title] 
    return acc + item.price * quantity
  }, 0)

  return (
    <>
      <CartList />
      <Payment total={totalPrice} />
      <Footer />
    </>
  )
}

export default Cart
