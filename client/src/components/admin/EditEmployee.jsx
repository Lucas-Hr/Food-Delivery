import React from 'react'

const EditEmployee = ({setIsVisible}) => {
  return (
    <form className='bg-[#FFF] px-8 py-4 rounded shadow absolute top-20 left-[400px] z-2 w-50'>
        <span className='absolute text-[#FF8000] px-2 text-2xl bg-white right-[-10px] top-[-10px] shadow-sm cursor-pointer' 
        style={{borderRadius : '100%'}} onClick={() => setIsVisible(false)}>&times;</span>
        <h3 className='text-center text-3xl'>Edit Employee</h3>
        <div className='mt-2'>
            <div className="my-3">
                <label htmlFor="image">Image</label>
                <input type="file" accept="image/*" className='rounded px-2 py-2 w-full bg-light border mt-2'  />
                
            </div>
            <div className="my-3">
                <label htmlFor="name">Name</label><br />
                <input type="text" className='rounded px-2 py-2 w-full bg-light border mt-2'  />
            </div>
            <div className="my-3">
                <label htmlFor="job">Job</label><br />
                <input type="text"  className='rounded px-2 py-2 w-full bg-light border mt-2'/>
            </div>
            <div className='flex justify-between w-full'>
                <div className="my-3 w-75 pe-4">
                    <label htmlFor="facebook">Facebook</label><br />
                    <input type="text" className='rounded px-2 py-2 w-100 bg-light border mt-2' />
                </div>
                <div className="my-3 w-75 ps-4">
                    <label htmlFor="LinkedIn">LinkedIn</label><br />
                    <input type="text" className='rounded px-2 py-2 w-full bg-light border mt-2' />
                </div>
            </div>
            
            <div className='flex justify-between w-full'>
                <div className="my-3 w-75 pe-4">
                    <label htmlFor="Instagram">Instagram</label><br />
                    <input type="text" className='rounded px-2 py-2 w-100 bg-light border mt-2' />
                </div>
                <div className="my-3 w-75 ps-4">
                    <label htmlFor="Twitter">Twitter</label><br />
                    <input type="text" className='rounded px-2 py-2 w-full bg-light border mt-2' />
                </div>
            </div>
            
            <div className='flex justify-between items-center'>
                <div className="my-3 w-full pe-4">
                    <label htmlFor="Twitter">Address</label><br />
                    <input type="text" className='rounded px-2 py-2 w-100 bg-light border mt-2' />
                </div>
                <div className="my-3 w-full ps-4">
                    <label htmlFor="Twitter">Phone</label><br />
                    <input type="text" className='rounded px-2 py-2 w-full bg-light border mt-2' />
                </div>
            </div>
            
            <div className="mt-4">
                <input type="submit" value="Confirm"  className='rounded px-2 py-2 w-full bg-[#FF8000] text-light '/>
            </div>
        </div>
    </form>
  )
}

export default EditEmployee