import { useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import Welcome from '../components/Welcome';
import OrderStep from '../components/OrderStep';
import Team from '../components/Team';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';
const Accueil = () => {

  return (
    <>
      <Welcome />
      <OrderStep />
      <Team />
      <BestSeller />
      <Footer />
    </>
  )
}

export default Accueil;
