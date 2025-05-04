import React from 'react'


function CardDashboard({img, number, text}) {
  return (
    <div className='w-72 py-4 px-5 flex items-center bg-light rounded'>
        <img src={img} alt="" className='w-16 h-16'/>
        <div className='text-[#464255] ms-4'>
            <h1 className='text-3xl font-semibold'>{number}</h1>
            <h3 className='font-light'>Total {text}</h3>
        </div>
    </div>
  )
}

export default CardDashboard