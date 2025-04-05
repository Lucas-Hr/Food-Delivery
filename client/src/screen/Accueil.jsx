import { useState } from 'react'
import NavigationBar from '../components/home/NavigationBar';
import Welcome from '../components/home/Welcome';
import OrderStep from '../components/home/OrderStep';
import Team from '../components/home/Team';
import BestSeller from '../components/home/BestSeller';
import Footer from '../components/home/Footer';
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
