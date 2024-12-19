import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accueil from './screen/Accueil'
import Menu from './screen/Menu'
import Cart from './screen/Cart'
import Dashboard from './screen/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App