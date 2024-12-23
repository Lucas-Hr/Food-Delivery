import { useState } from 'react'
import NavigationBar from '../component/NavigationBar';
import Welcome from '../component/Welcome';
import OrderStep from '../component/OrderStep';

const Accueil = () => {

  return (
    <>
      <NavigationBar  />
      <Welcome />
      <OrderStep />
    </>
  )
}

export default Accueil;
