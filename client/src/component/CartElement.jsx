import React from 'react'
import Trash from '../assets/img/trash.png'

function CartElement({img, name, ingredients, price, quantity}) {
  return (
    <div className="d-flex">
        <div>
            <img src={img} alt="" />
        </div>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
                <h3>{name}</h3>
                <h5>{ingredients}</h5>
            </div>
            <div>
                <h3>{price}</h3>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <p>-</p>
                <p>{quantity}</p>
                <p>+</p>
            </div>
        </div>
        <div>
            <img src={Trash} alt="" />
        </div>
    </div>
  )
}

export default CartElement