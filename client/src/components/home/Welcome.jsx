import React from 'react'
import HomePng from '../../assets/img/home.png'
import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <motion.section 
    initial={{opacity: 0, y: 200}}
    animate={{opacity: 1, y: 0}}
    transition={{
      duration: 1,
    }}
    className='d-flex justify-content-between align-items-center w-100 py-32 px-52'
    >
        <div className='w-50'>
          <h1>
            Enjoy Our <br /> <span class='font-bold'>Delicious Meal</span>
          </h1>
          <h5 className='mt-3' style={{color : "#6D6D6D"}}>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Proin ac rutrum neque, vel congue tellus duis venenatis nisi ligulavarius.
          </h5>
        </div>
        <div className='w-50'>
          <img style={{width: '100%'}} src={HomePng} alt="" />
        </div>
      </motion.section>
  )
}

export default Welcome