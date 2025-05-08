import React from 'react'
import { motion } from 'framer-motion'
import Trash from '../../assets/img/trash.png'
import Edit from '../../assets/img/edit.png'

const FoodCard = ({img,title,ingredients,price,deleteFood,setIsVisible}) => {
  return (
    <div className="card w-[200px] h-auto shadow-sm mb-5  overflow-hidden">
        <img src={img} className={`card-img-top img-fluid mx-auto d-block object-fit-cover h-32  z-1 transition duration-150 ease-out`} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-lg semibold leading-none">{title}</h5>
          <h5 className="card-text text-xs italic text-[#6D6D6D]">{ingredients}</h5>
          <div className='flex justify-between items-center mt-3'>
            <h5 className='font-bold text-lg'>{price} $</h5>
            <div className='rounded-lg flex justify-between items-center text-white  px-1 pb-0.5'>
              <img src={Trash} className="w-4 cursor-pointer" alt="" onClick={deleteFood} />
              <img src={Edit} className="w-6 cursor-pointer" alt="" onClick={() => setIsVisible(true)}/>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default FoodCard