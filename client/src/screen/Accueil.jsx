import { useState } from 'react'
import NavigationBar from '../component/NavigationBar';
import Welcome from '../component/Welcome';
import OrderStep from '../component/OrderStep';
import Team from '../component/Team';
import BestSeller from '../component/BestSeller';
import Footer from '../component/Footer';
const Accueil = () => {

  return (
    <>
      {/* <NavigationBar  /> */}
      <Welcome />
      <OrderStep />
      <Team />
      <BestSeller />
      <Footer />
    </>
  )
}

export default Accueil;
