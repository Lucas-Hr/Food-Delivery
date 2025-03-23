import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Payment = ({total}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className='flex justify-between items-start px-52 pb-36 mt-8'>
        <div >
            <div className='flex justify-between items-center px-8 py-2 bg-[#F9F9F9] shadow-sm border-2 rounded-lg'>
                <h5 className='text-xl color-[#A4A4A4]'>Total</h5>
                <h5 className='text-xl color-[#A4A4A4]'>${total}</h5>
            </div>
            <button className='text-white px-10 py-2 bg-[#FF8000] shadow-sm rounded-lg mt-2 text-xl cursor-pointer' onClick={() => setVisible(true)}>
                Proceed to payment
            </button>
        </div>

        {visible &&
          <motion.div
           className='bg-[#f9f9f9] px-4 py-4 rounded-lg w-50 position-relative'
           initial={{ x: 200 }}
           animate={{ x: 0 }}
           transition={{ duration: 0.5 }}
          >
            <span className='position-absolute text-[#FF8000] px-2 text-2xl bg-white right-[-10px] top-[-10px] shadow-sm cursor-pointer' onClick={() => setVisible(false)} style={{borderRadius : '100%'}}>&times;</span>
            <form onSubmit={(e) => e.preventDefault()} className='w-full'>
              <div className='flex justify-between items-center'>
                <label htmlFor='paymentmethod' className='font-semibold'>Payment method</label>
                <select id='paymentmethod' name='paymentmethod' className='w-25 px-3 py-2 rounded-lg bg-white text-[#A4A4A4]' defaultValue="Credit Card">
                  <option value='creditcard'>Credit Card</option>
                  <option value='paypal'>Paypal</option>
                  <option value='stripe'>Stripe</option>
                </select>
              </div>

              <div className='mt-4 w-full'>
                <label htmlFor='cardnumber' className='text-[#A4A4A4]'>Card number</label><br />
                <input type='text' id='cardnumber' name='cardnumber' className='px-3 py-2 rounded-lg bg-white mt-2 w-full shadow-sm' required/>
              </div>

              <div className='mt-4 w-full'>
                <label htmlFor='name' className='text-[#A4A4A4]'>Name</label><br />
                <input type='text' id='name' name='name' className='px-3 py-2 rounded-lg bg-white mt-2 w-full shadow-sm' required/>
              </div>

              <div className='mt-4 w-full'>
                <label htmlFor='mail' className='text-[#A4A4A4]'>Mail</label><br />
                <input type='text' id='mail' name='mail' className='px-3 py-2 rounded-lg bg-white mt-2 w-full shadow-sm' required/>
              </div>

              <div className='mt-4 w-full'>
                <label htmlFor='phone' className='text-[#A4A4A4]'>Phone</label><br />
                <input type='text' id='phone' name='phone' className='px-3 py-2 rounded-lg bg-white mt-2 w-full shadow-sm' required/>
              </div>

              <div className='mt-4 w-full'>
                <label htmlFor='address' className='text-[#A4A4A4]'>Address</label><br />
                <input type='text' id='address' name='address' className='px-3 py-2 rounded-lg bg-white mt-2 w-full shadow-sm' required/>
              </div>

              <div className='flex justify-center'>
                <button type='submit' className='mt-4 w-50 text-white px-10 py-2 bg-[#FF8000] shadow-sm rounded-lg mt-2 text-xl cursor-pointer'>
                    Confirm
                </button>
              </div>

            </form>
          </motion.div>
        }


        
    </div>
  )
}

export default Payment