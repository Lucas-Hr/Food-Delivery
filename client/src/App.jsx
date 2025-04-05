import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './screen/Accueil'
import Menu from './screen/Menu'
import Cart from './screen/Cart'
import Dashboard from './screen/Dashboard'
import NavigationBar from './components/home/NavigationBar'
import { CartProvider } from './components/context/CartContext'
import { QuantityProvider } from './components/context/QuantityContext'
import { AddedProvider } from './components/context/AddedContext'
const App = () => {
  return (
    <CartProvider>
      <AddedProvider>
        <QuantityProvider>
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route path='/' element={<Accueil />}></Route>
              <Route path='/menu' element={<Menu />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
          </BrowserRouter>
        </QuantityProvider>
      </AddedProvider>
    </CartProvider>
  )
}

export default App
