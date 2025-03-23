import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const CardBestSeller = ({img, title, ingredients, prix}) => {
  const[isVisible, setIsVisible] = useState(false)


  return (
    <>
      <div className="card w-[250px] shadow-sm mb-5 overflow-hidden" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      >
        {
          isVisible &&
            <motion.button 
                animate={{opacity : 1}}
                transition={{duration : 0.5}}
                className='transition duration-150 ease-out rounded-xl bg-[#FF8000] px-3 py-1 w-auto absolute text-white font-semibold top-20 left-14 cursor- z-2'
            >
              + Add to cart
            </motion.button>
        }
        <img src={img} className={`card-img-top img-fluid mx-auto d-block object-fit-cover h-44  z-1 transition duration-150 ease-out ${isVisible ? "ease-in filter brightness-50 scale-110" : ""}`} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-xl leading-none">{title}</h5>
          <h5 className="card-text text-sm italic">{ingredients}</h5>
          <div className='flex justify-between items-end mt-3'>
            <h5 className='font-bold text-xl'>{prix} $</h5>
            <div className='rounded-lg flex justify-between items-center text-white bg-[#FF8000] px-1 pb-0.5'>
              <span className="mx-1 text-sm cursor-pointer">-</span>
              <span className="mx-1 px-2 text-sm">1</span>
              <span className="mx-1 text-sm cursor-pointer">+</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default CardBestSeller