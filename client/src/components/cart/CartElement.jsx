import React from 'react'
import Trash from '../../assets/img/trash.png'

function CartElement({img, name, ingredients, price, quantity}) {
  return (
    <div className="flex">
        <div>
            <img src={img} alt="" />
        </div>
        <div className='flex justify-evenly items-center'>
            <div>
                <h3>{name}</h3>
                <h5>{ingredients}</h5>
            </div>
            <div>
                <h3>{price}</h3>
            </div>
            <div className='flex justify-between items-center'>
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