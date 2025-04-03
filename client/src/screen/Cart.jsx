import Footer from '../components/Footer'
import CartList from '../components/CartList'
import Payment from '../components/Payment'
import { useCart } from '../components/CartContext'
import { useEffect, useState } from 'react'
const Cart = () => {
  const {cart} = useCart()
  const [price, setPrice] = useState([])
  useEffect(() => {
    setPrice(cart.map(cart => (cart.price * cart.quantity)))
  },[])

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
