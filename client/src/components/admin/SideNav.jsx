import React, { useState } from 'react'
import Logo from '../../assets/img/Logo.png'
import DashboardIcon from '../../assets/img/Dashboard.svg'
import OrderListIcon from '../../assets/img/orderlist.svg'
import FoodsIcon from '../../assets/img/foods.svg'
import EmployeeIcon from '../../assets/img/employee.svg'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Highlight from '../../assets/img/highlight.png'

const SideNav = () => {
    const [position, setPosition] = useState(0)
  return (
    <div className='h-screen w-64 pt-8 relative'>
        <motion.img
        initial={{y : 0}}
        animate={{y : position}}
        transition={{ duration : 0.5 }}
        src={Highlight}
        alt=""
        className='absolute' 
        style={{width : 200, height: 50, top : 95}}
        />
        <div>
            <img src={Logo} alt="" className='w-48 ps-12'/>
        </div>

        <div className='flex flex-col mt-10 ps-12'>
            <NavLink onClick={() => setPosition(0)} className="link cursor-pointer position-relative py-3 flex" to="/dashboard">
            {({ isActive }) => (
                <>
                    <img src={DashboardIcon} alt="" className="me-3" />
                    <span className={isActive ? "text-[#FF8000] me-3 " : "text-[#464255] me-3"}>
                        Dashboard
                    </span>
                </>
            )}
            </NavLink>
            <NavLink onClick={() => setPosition(55)} className="link cursor-pointer position-relative py-3 flex" to="/orderlist">
            {({ isActive }) => (
                <>
                <img src={OrderListIcon} alt="" className='me-3' />
                <span className={isActive ? "text-[#FF8000] me-3 " : "text-[#464255] me-3"}>
                    Order List
                </span>
                </>
            )}
            </NavLink>
            <NavLink onClick={() => setPosition(110)} className="link cursor-pointer position-relative py-3 flex" to="/menuadmin">
            {({ isActive }) => (
                <>
                    <img src={FoodsIcon} alt="" className='me-3' />
                    <span className={isActive ? "text-[#FF8000] me-3 " : "text-[#464255] me-3"}>
                        Food List
                    </span>
                    
                </>
            )}
                
            </NavLink>
            <NavLink onClick={() => setPosition(168)} className="link cursor-pointer position-relative py-3 flex" to="/employees">
            {({ isActive }) => (
                <>
                    <img src={EmployeeIcon} alt="" className='me-3' />
                    <span className={isActive ? "text-[#FF8000] me-3 " : "text-[#464255] me-3"}>
                        Employees
                    </span>
                    
                </>
            )}
            </NavLink>
        </div>
        
    </div>
  )
}

export default SideNav;