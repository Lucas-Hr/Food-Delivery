import React from 'react'

const CardBestSeller = ({img, title, ingredients, prix}) => {
  return (
    <>
      <div className="card" style={{width: "15rem"}}>
        <img src={img} className="card-img-top img-fluid mx-auto d-block object-fit-cover h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{ingredients}</p>
          <h5 className='fw-bold'>{prix} $</h5>
        </div>
      </div>
    </>
  )
}

export default CardBestSeller