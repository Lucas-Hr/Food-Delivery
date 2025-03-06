import { useState } from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../assets/img/facebook.svg'
import Twitter from '../assets/img/twitter.svg'
import Instagram from '../assets/img/instagram.svg'
import LinkedIn from '../assets/img/linkedin.svg'




const CardTeam = ({img, nom, poste}) => {
  return (
    <>
      <div className='card-team'>
        <img src={img} className='rounded-circle img-fluid mx-auto d-block object-fit-cover w-48 h-48'  />
        <h3 className='card-title text-center mt-3 text-3xl font-semibold'>{nom}</h3>
        <h5 className='card-subtitle text-center mt-2 text-2xl'>{poste}</h5>
        <div className='d-flex justify-content-between mt-5'>
          <Link to='#'><img src={Facebook} /></Link>
          <Link to='#'><img src={Twitter} /></Link>
          <Link to='#'><img src={Instagram} /></Link>
          <Link to='#'><img src={LinkedIn} /></Link>
        </div>
      </div>
    </>
  )
}

export default CardTeam
