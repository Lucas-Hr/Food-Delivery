import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCart } from './CartContext'
import { useQuantity } from './QuantityContext'

const CardBestSeller = ({img, title, ingredients, price}) => {
  const[isVisible, setIsVisible] = useState(false)
  const [quantity, setQuantity] = useState(0);
  const {addToCart} = useCart()

  const handleAddToCart = () => {
    const item = {img, title, ingredients, price, quantity}
    addToCart(item)
  }
  return (
    <>
      <div className="card w-[250px] h-[300px] shadow-sm mb-5 cursor-pointer overflow-hidden" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      >
        {
          isVisible &&
            <motion.button 
                animate={{opacity : 1}}
                transition={{duration : 0.5}}
                className='transition duration-150 ease-out rounded-xl bg-[#FF8000] px-3 py-1 w-auto absolute text-white font-semibold top-20 left-14 cursor- z-2'
                onClick={handleAddToCart}
            >
              + Add to cart
            </motion.button>
        }
        <img src={img} className={`card-img-top img-fluid mx-auto d-block object-fit-cover h-44  z-1 transition duration-150 ease-out ${isVisible ? "ease-in filter brightness-50 scale-110" : ""}`} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-xl leading-none">{title}</h5>
          <h5 className="card-text text-sm italic">{ingredients}</h5>
          <div className='flex justify-between items-end mt-3'>
            <h5 className='font-bold text-xl'>{price} $</h5>
            <div className='rounded-lg flex justify-between items-center text-white bg-[#FF8000] px-1 pb-0.5'>
              <span className="mx-1 text-md cursor-pointer" onClick={() => setQuantity(quantity - 1)}>-</span>
              <span className="mx-1 px-2 text-md">{quantity}</span>
              <span className="mx-1 text-md cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default CardBestSeller