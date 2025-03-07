import React from 'react'

const CardBestSeller = ({img, title, ingredients, prix}) => {
  return (
    <>
      <div className="card w-[250px] shadow-sm mb-5">
        <img src={img} className="card-img-top img-fluid mx-auto d-block object-fit-cover h-44" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-xl">{title}</h5>
          <h5 className="card-text text-sm italic">{ingredients}</h5>
          <h5 className='font-bold'>{prix} $</h5>
        </div>
      </div>
    </>
  )
}

export default CardBestSeller