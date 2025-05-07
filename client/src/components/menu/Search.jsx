import React from 'react'

function Search({setSearch}) {
  return (
    <div 
        initial={{opacity : 0, x : -100}}
        animate={{opacity : 1, x:0}}
        transition={{duration : 1}}
    >   
        <input 
            className="bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm focus:outline-none"
            type="text" 
            name="" 
            id="" 
            placeholder='Search food...'
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default Search