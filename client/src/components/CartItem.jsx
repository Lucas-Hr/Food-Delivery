import React, { useEffect, useState } from 'react'
import Trash from '../assets/img/trash.png'

const CartItem = ({img, title, ingredients, price, quantity, deleteCart}) => {
  return (
    <div className='flex justify-between items-center mb-4 bg-[#F9F9F9] h-[150px] shadow-md'>
        
        <img className='w-[200px] h-[150px] rounded-lg' src={img} alt="" />

        <div className='flex justify-between items-center w-100 px-10'>
            <div>
                <h1 className='text-xl'>{title}</h1>
                <p className='text-sm italic'>{ingredients}</p>
            </div>

            <div className='font-bold text-xl'>
                <p>{price}$</p>
            </div>

            <div className='rounded-lg flex justify-between items-center text-white bg-[#FF8000] px-1 pb-0.5'>
              <span className="mx-1 text-sm cursor-pointer">-</span>
              <span className="mx-1 px-2 text-sm">{quantity}</span>
              <span className="mx-1 text-sm cursor-pointer">+</span>
            </div>
            
        </div>

        <div className='flex items-center bg-white h-[150px] px-10 rounded-lg border-2 cursor-pointer'  onClick={() => deleteCart(title)}>
            <img src={Trash} alt="trash" className='w-10 h-8 '/>
        </div>
    </div>
  )
}

export default CartItem;