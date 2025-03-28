import React from 'react'
import CardBestSeller from './CardBestSeller'
import Lasagna from '../assets/img/lasagna.jpg'
import Mac from '../assets/img/mac.jpg'
import Sushi from '../assets/img/sushi.jpg'
import Chicken from '../assets/img/chicken.jpg'
import Arrow from '../assets/img/arrow.png'
import { motion } from 'framer-motion'

function FoodList() {
const categories = ['All','Asian Food','Malagasy Food', 'Fast Food' , 'Korean Food', 'Cocktails', 'Cake']
 const food = [
        {
            img : Lasagna,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Mac,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Sushi,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Chicken,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Lasagna,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Lasagna,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Lasagna,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Lasagna,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },
        {
            img : Lasagna,
            title : "Lasagna",
            ingredients : "Tomato, Cheese, Olive",
            prix : "100"
        },

    ]

  return (
    <section className='px-52 py-36 relative'>
        <motion.select 
            initial={{opacity : 0, x : -200}}
            animate={{opacity : 1, x:0}}
            transition={{duration : 1}}
            name="" id="" className='bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm relative left-64'
        >
            <option value="">Name</option>
            <option value="">Price</option>
        </motion.select>
        <div className='d-flex justify-content-between vh-100 mt-2'>
            <motion.div 
                initial={{opacity : 0, x : -100}}
                animate={{opacity : 1, x:0}}
                transition={{duration : 1}}
            >
                <input className="bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm focus:outline-none" type="text" name="" id="" placeholder='Search food...'/>
                <h2 className='mt-4 text-3xl' style={{borderLeft : "4px solid #FF8000", paddingLeft : "10px"}}>Categories</h2>
                <div>
                    {categories.map((c, index) => {
                        return (
                            <motion.div
                            initial={{x:0}}
                            whileHover={{x:10}} 
                            key={index} 
                            className='d-flex my-4 cursor-pointer'>
                                <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                                <h6>{c}</h6>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>

            <motion.div 
                initial={{opacity : 0, x : 100}}
                animate={{opacity : 1, x:0}}
                transition={{duration : 1}}
                className='d-flex flex-wrap justify-content-between ms-5 overflow-scroll '>
                {food.map((f, index) => {
                    return (
                        <>
                            <CardBestSeller img={f.img} title={f.title} ingredients={f.ingredients} prix={f.prix}/>
                        </>
                    )
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default FoodList