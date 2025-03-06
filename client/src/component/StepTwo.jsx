import React from 'react'

const StepTwo = ({step, img, text}) => {
  return (
    <div className='relative text-center'>
        <h3 className='relative font-bold text-center top-32 text-3xl'>{text}</h3>
        <img className='relative top-72 w-[300px]' src={step} alt="" />
        <img className='relative top-10 left-20 w-[130px] h-[120px]' src={img} alt="" />
        
    </div>
  )
}

export default StepTwo