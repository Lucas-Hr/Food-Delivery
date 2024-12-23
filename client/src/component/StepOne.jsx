import React from 'react'

const StepOne = ({step, img, text}) => {
  return (
    <div className='position-relative  text-center'>
        <img className=' ' style={{width : 300}} src={step} alt="" />
        <img className=' ' style={{ width : 120, height : 120}} src={img} alt="" />
        <h3 className='position-relative fw-bold text-center'  >{text}</h3>
    </div>
  )
}

export default StepOne