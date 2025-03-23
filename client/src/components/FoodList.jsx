import React from 'react'
import CardBestSeller from './CardBestSeller'
import Lasagna from '../assets/img/lasagna.jpg'
import Mac from '../assets/img/mac.jpg'
import Sushi from '../assets/img/sushi.jpg'
import Chicken from '../assets/img/chicken.jpg'
import Arrow from '../assets/img/arrow.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

function FoodList() {
    const [categorie, setCategorie] = useState('All');
    const [search, setSearch] = useState('');
    const categories = ['All','Asian Food','Malagasy Food', 'Fast Food' , 'Korean Food', 'Cocktails', 'Cake'];
    const food = [
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Korean Food"
            },
            {
                img : Mac,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Fast Food"
            },
            {
                img : Sushi,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Cocktails"
            },
            {
                img : Chicken,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Cake"
            },
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Asian Food"
            },
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Asian Food"
            },
            {
                img : Lasagna,
                title : "Bolognaise",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Malagasy Food"
            },
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Malagasy Food"
            },
            {
                img : Lasagna,
                title : "Mac",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Malagasy Food" 
            },
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Malagasy Food"
            },
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Fast Food"
            },
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive",
                prix : "100",
                categorie : "Fast Food"
            },

        ]

  return (
    <section className='px-52 py-36 relative'>
        <motion.select 
            initial={{opacity : 0, x : -200}}
            animate={{opacity : 1, x:0}}
            transition={{duration : 1}}
            name="" id=""
            className='bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm relative left-64'
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
                <input 
                    className="bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm focus:outline-none"
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Search food...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <h2 className='mt-4 text-3xl' style={{borderLeft : "4px solid #FF8000", paddingLeft : "10px"}}>Categories</h2>
                <div>
                    {categories.map((c, index) => {
                        return (
                            <motion.div
                            initial={{x:0}}
                            whileHover={{x:10}} 
                            key={index}
                            className='d-flex my-4 cursor-pointer'
                            onClick={() => {setCategorie(c)}}
                            >
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
                className='flex flex-wrap justify-between w-full ms-5 overflow-scroll'
            >
                {categorie === 'All' ? 
                
                food.filter((f) => {
                    return search.toLowerCase() === ""
                        ? f
                        : f.title.toLowerCase().includes(search);
                    })
                    .map((f, index) => {
                    return (
                        <motion.div
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1}}
                        >
                            <CardBestSeller key={index} img={f.img} title={f.title} ingredients={f.ingredients} prix={f.prix}/>
                        </motion.div>
                    )
                }) : 
                
                food
                .filter((f) => f.categorie === categorie)
                .filter((f) => {
                    return search.toLowerCase() === ""
                        ? f
                        : f.title.toLowerCase().includes(search);
                    })
                .map((f, index) => {
                    return (
                        <motion.div
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1}}
                        >
                            <CardBestSeller key={index} img={f.img} title={f.title} ingredients={f.ingredients} prix={f.prix}/>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default FoodList