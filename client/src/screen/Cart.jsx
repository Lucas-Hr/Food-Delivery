import Footer from '../components/home/Footer'
import CartList from '../components/cart/CartList'
import Payment from '../components/cart/Payment'
import { useCart } from '../components/context/CartContext'
import { useEffect, useState } from 'react'
const Cart = () => {
  const {cart} = useCart()
  const [price, setPrice] = useState([])
  useEffect(() => {
    setPrice(cart.map(cart => (cart.price * cart.quantity)))
  },[cart])

  return (
    <>
      <CartList />
      <Payment total={price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    },0)}/>
      <Footer />
    </>
  )
}

export default Cart
