import React, { useState } from 'react'
import Logo from '../../assets/img/Logo.png'
import DashboardSvg from '../../assets/img/DashboardSvg'
import EmployeeSvg from '../../assets/img/EmployeeSvg'
import FoodsSvg from '../../assets/img/FoodsSvg'

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Highlight from '../../assets/img/highlight.png'
import OrderListSvg from '../../assets/img/OrderListSvg'

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
            <NavLink onClick={() => setPosition(0)} className="link cursor-pointer position-relative py-3 flex" to="/">
            {({ isActive }) => (
                <>
                    <DashboardSvg color={isActive ? "#FF8000" : "#464255"}/>
                    <span className={isActive ? "text-[#FF8000] ms-3 " : "text-[#464255] ms-3"}>
                        Dashboard
                    </span>
                </>
            )}
            </NavLink>
            <NavLink onClick={() => setPosition(55)} className="link cursor-pointer position-relative py-3 flex" to="/orderlist">
            {({ isActive }) => (
                <>
                <OrderListSvg color={isActive ? "#FF8000" : "#464255"}/>
                <span className={isActive ? "text-[#FF8000] ms-3 " : "text-[#464255] ms-3"}>
                    Order List
                </span>
                </>
            )}
            </NavLink>
            <NavLink onClick={() => setPosition(110)} className="link cursor-pointer position-relative py-3 flex" to="/menuadmin">
            {({ isActive }) => (
                <>
                    <FoodsSvg color={isActive ? "#FF8000" : "#464255"}/>
                    <span className={isActive ? "text-[#FF8000] ms-3 " : "text-[#464255] ms-3"}>
                        Food List
                    </span>
                    
                </>
            )}
                
            </NavLink>
            <NavLink onClick={() => setPosition(168)} className="link cursor-pointer position-relative py-3 flex" to="/employees">
            {({ isActive }) => (
                <>
                    <EmployeeSvg color={isActive ? "#FF8000" : "#464255"}/>
                    <span className={isActive ? "text-[#FF8000] ms-3 " : "text-[#464255] ms-3"}>
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