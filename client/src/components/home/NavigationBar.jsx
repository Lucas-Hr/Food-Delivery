import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/img/Logo.png'
import Cart from '../../assets/img/cart.png'
import Login from '../../assets/img/login.png'
import Active from '../../assets/img/activeNavBar.png'
import './../../assets/style/navbar.css'
import {motion, AnimatePresence} from 'framer-motion'

const NavigationBar = () => {
  const [position, setPosition] = useState(0)
  
  return (
    <>
      <Navbar className="w-100 justify-content-between fixed shadow top-0 bg-white z-3 px-52 py-8" >
        <Navbar.Brand>
          <img
            alt=""
            src={Logo}
            className="d-inline-block align-top w-[200px]"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end align-items-center item position-relative">
          <motion.img
            initial={{x : 0}}
            animate={{x : position}}
            transition={{ duration : 0.5 }}
            src={Active}
            alt=""
            className='position-absolute left-6' 
            style={{width : 10, height: 10, top : 50}}
          />
          <Nav.Item >
            <Link onClick={() => setPosition(0)} className="link cursor-pointer position-relative  hover:text-black" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className='position-relative' >
            <Link onClick={() => setPosition(90)} className="link cursor-pointer position-relative hover:text-black" to="/menu">
             Menu
            </Link>
          </Nav.Item>
          <Nav.Item className='d-flex align-items-center cursor-pointer'>
            <img style={{width : 20,height :20}} src={Login} alt="" />
            <Nav.Link className='link'> Login </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link >
              <Link to="/cart" className='cursor-pointer' onClick={() => setPosition(305)}>
                <img style={{width : 30, height : 30}} src={Cart} alt="" />
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar> 
    </>
  )
}

export default NavigationBar;
