import React from 'react'
import HomePng from '../assets/img/home.png'

const Welcome = () => {
  return (
    <section className='d-flex justify-content-between align-items-center mt-5 w-100 py-3' style={{padding : "0px 200px"}}>
        <div className='w-50'>
          <h1>
            Enjoy Our <br /> Delicious Meal
          </h1>
          <h5 className='mt-3' style={{color : "#6D6D6D"}}>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Proin ac rutrum neque, vel congue tellus duis venenatis nisi ligulavarius.
          </h5>
        </div>
        <div className='w-50'>
          <img style={{width: '100%'}} src={HomePng} alt="" />
        </div>
      </section>
  )
}

export default Welcome