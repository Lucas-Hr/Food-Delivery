import React from 'react'

const Payment = ({total}) => {
  return (
    <div className='px-52 pb-36'>
        <div>
            <div className='w-25 flex justify-between items-center px-10 py-2 bg-[#F9F9F9] shadow-sm border-2 rounded-lg'>
                <h5 className='text-xl color-[#A4A4A4]'>Total</h5>
                <h5 className='text-xl color-[#A4A4A4]'>100$</h5>
            </div>
            <div className='w-25 text-white px-10 py-2 bg-[#FF8000] shadow-sm rounded-lg mt-2'>
                <h5 className='text-xl text-center cursor-pointer'>Proceed to payment</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Payment