import React ,{ useState } from 'react'
import { motion } from 'framer-motion';
import Arrow from '../../assets/img/arrow.png'
const Categorie = ({categories ,setCategorie}) => {
    return (
        <div>
            <h2 className='mt-4 text-3xl' style={{borderLeft : "4px solid #FF8000", paddingLeft : "10px"}}>Categories</h2>
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
    )
}

export default Categorie