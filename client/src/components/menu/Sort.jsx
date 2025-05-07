import React from 'react'
import { motion } from 'framer-motion'

const Sort = ({sort , handleSort}) => {
  return (
        <motion.select 
            initial={{opacity : 0, x : -200}}
            animate={{opacity : 1, x:0}}
            transition={{duration : 1}}
            name="" id=""
            className='bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm relative left-60 top-8'
            value={sort}
            onChange={handleSort}
        >
            <option value="" disabled>Sort by</option>
            <option value="title">Name</option>
            <option value="price">Price</option>
        </motion.select>
  )
}

export default Sort