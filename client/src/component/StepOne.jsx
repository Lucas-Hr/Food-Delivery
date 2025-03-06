import React from 'react'

const StepOne = ({step, img, text}) => {
  return (
    <div className='relative text-center'>
        <img className='w-[300px]'  src={step} alt="" />
        <img className='relative left-20 w-[120px] h-[120px]'  src={img} alt="" />
        <h3 className='position-relative text-3xl font-bold text-center' >{text}</h3>
    </div>
  )
}

export default StepOne