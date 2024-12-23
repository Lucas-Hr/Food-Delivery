import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/img/Logo.png'
import Cart from '../assets/img/cart.png'
import Login from '../assets/img/login.png'
import Active from '../assets/img/activeNavBar.png'
import './../assets/style/navbar.css'
import {motion, AnimatePresence} from 'framer-motion'
 

const NavigationBar = () => {
  const [state, setState] = useState(false)
  return (
    <>
      {/* <Link to="/">Accueil</Link>
      <Link to="/menu" className='cursor-pointer'>Menu</Link>
      <Link to="/cart" className='cursor-pointer'>Cart</Link>      */}
      <Navbar className="w-100 justify-content-between">
        <Navbar.Brand>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top w-100"
          />
        </Navbar.Brand>

        <Nav className="justify-content-end align-items-center item position-relative">
          <motion.img 
            initial={{left : 20}}
            
            src={Active}
            alt=""
            className='position-absolute' 
            style={{width : 10, height: 10, top : 50}}
          />
          <Nav.Item>
            <Link className="link cursor-pointer position-relative" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className='position-relative'>
            <Link className="link cursor-pointer position-relative" to="/menu">
             Menu
            </Link>
          </Nav.Item>
          <Nav.Item className='d-flex align-items-center cursor-pointer'>
            <img style={{width : 20,height :20}} src={Login} alt="" />
            <Nav.Link className='link'> Login </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link ><Link to="/cart" className='cursor-pointer '><img style={{width : 30, height : 30}} src={Cart} alt="" /></Link></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar> 
    </>
  )
}

export default NavigationBar;
