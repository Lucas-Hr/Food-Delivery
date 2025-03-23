import Footer from '../components/Footer'
import CartList from '../components/CartList'
import Payment from '../components/Payment'

const Cart = () => {

  return (
    <>
      <CartList />
      <Payment total={10}/>
      <Footer />
    </>
  )
}

export default Cart
