import React from 'react'

const EditFood = ({setIsVisible}) => {
  return (
    <form className='bg-[#FFF] px-8 py-4 rounded shadow absolute top-44 left-[600px] z-2 w-25'>
        <span className='absolute text-[#FF8000] px-2 text-2xl bg-white right-[-10px] top-[-10px] shadow-sm cursor-pointer' 
        style={{borderRadius : '100%'}} onClick={() => setIsVisible(false)}>&times;</span>
        <h3 className='text-center text-3xl'>Edit Food</h3>
        <div className='mt-2'>
            <div className="my-3">
                <label htmlFor="title">Image
                    <input type="file" accept="image/*" className='rounded bg-light border px-2 py-2 w-full mt-2'  />
                </label>
            </div>
            <div className="my-3">
                <label htmlFor="title">Title</label><br />
                <input type="text" className='rounded px-2 py-2 w-full bg-light border mt-2'  />
            </div>
            <div className="my-3">
                <label htmlFor="title">Ingredients</label><br />
                <input type="text"  className='rounded px-2 py-2 w-full bg-light border mt-2'/>
            </div>
            <div className="my-3">
                <label htmlFor="title">Price</label><br />
                <input type="text" className='rounded px-2 py-2 w-full bg-light border mt-2' />
            </div>
            <div className="mt-4">
                <input type="submit" value="Confirm"  className='rounded px-2 py-2 w-full bg-[#FF8000] text-light '/>
            </div>
        </div>
    </form>
  )
}

export default EditFood;