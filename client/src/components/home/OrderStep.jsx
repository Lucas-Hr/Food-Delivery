import React from 'react'
import Step from './StepOne'
import firstStep from '../../assets/img/firstStep.png'
import secondStep from '../../assets/img/secondStep.png'
import thirdStep from '../../assets/img/thirdStep.png'
import fourthStep from '../../assets/img/fourthStep.png'
import pickFood from '../../assets/img/pickFood.png'
import payCash from '../../assets/img/payCash.png'
import getDelivered from '../../assets/img/getDelivered.png'
import enjoyMeal from '../../assets/img/enjoyMeal.png'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { motion } from 'framer-motion'
function OrderStep() {
  return (
    <>
        <motion.section
         initial={{opacity: 0, y: 200}}
         whileInView={{opacity: 1, y: 0}}
         viewport={{once: true}}
         transition={{
           duration: 1,
         }}
        className='vh-100 py-5' style={{backgroundColor : "#F9F9F9",padding : "0px 200px"}}
        >
            <div>
                <h1 className='text-center'>Easy Order Step</h1>
                <hr className='w-25 justify-content-center' style={{color : "#FF8000"}}/>
            </div>
            <div className="d-flex justify-content-between mt-5">
                <StepOne className='w-100' step={firstStep} img={pickFood} text={'Pick your food'}/>
                <StepTwo className='w-100' step={secondStep} img={payCash} text={'Pay cash'}/>
                <StepOne className='w-100' step={thirdStep} img={getDelivered} text={'Get delivered'}/>
                <StepTwo className='w-100' step={fourthStep} img={enjoyMeal} text={'Enjoy your meal'}/>
            </div>
           
        </motion.section>
    </>
  )
}

export default OrderStep