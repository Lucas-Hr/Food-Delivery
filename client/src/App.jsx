import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './screen/Accueil'
import Menu from './screen/Menu'
import Cart from './screen/Cart'
import Dashboard from './screen/admin/Dashboard';
import OrderList from './screen/admin/OrderList';
import MenuAdmin from './screen/admin/Menu';
import Employees from './screen/admin/Employees';
import NavigationBar from './components/home/NavigationBar'
import { CartProvider } from './components/context/CartContext'
import { QuantityProvider } from './components/context/QuantityContext'
import { AddedProvider } from './components/context/AddedContext'
import SideNav from './components/admin/SideNav';
const App = () => {
  return (
    // <CartProvider>
    //   <AddedProvider>
    //     <QuantityProvider>
    //       <BrowserRouter>
    //         <NavigationBar />
    //         <Routes>
    //           <Route path='/' element={<Accueil />}></Route>
    //           <Route path='/menu' element={<Menu />}></Route>
    //           <Route path='/cart' element={<Cart />}></Route>
    //         </Routes>
    //       </BrowserRouter>
    //     </QuantityProvider>
    //   </AddedProvider>
    // </CartProvider>
      <BrowserRouter>
        <div className='flex'>
          <SideNav />
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/orderlist' element={<OrderList />}></Route>
              <Route path='/menuadmin' element={<MenuAdmin />}></Route>
              <Route path='/employees' element={<Employees />}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
