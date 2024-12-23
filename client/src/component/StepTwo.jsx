import React from 'react'

const StepTwo = ({step, img, text}) => {
  return (
    <div className='position-relative text-center'>
        <h3 className='position-relative fw-bold text-center'  style={{top : 120}}>{text}</h3>
        <img className='position-relative' style={{top: 250, width : 300}} src={step} alt="" />
        <img className='' style={{ top: 170, width : 130, height : 120}} src={img} alt="" />
        
    </div>
  )
}

export default StepTwo