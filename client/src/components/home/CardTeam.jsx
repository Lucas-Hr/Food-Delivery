import { useState } from 'react'
import { Link } from 'react-router-dom'
import FacebookSvg from '../../assets/img/FacebookSvg'
import TwitterSvg from '../../assets/img/TwitterSvg'
import InstagramSvg from '../../assets/img/InstagramSvg'
import LinkedInSvg from '../../assets/img/LinkedInSvg'

const CardTeam = ({img, nom, poste}) => {
  return (
    <>
      <div className='card-team'>
        <img src={img} className='rounded-circle img-fluid mx-auto d-block object-fit-cover w-48 h-48 '/>
        <h3 className='card-title text-center mt-3 text-3xl font-semibold'>{nom}</h3>
        <h5 className='card-subtitle text-center mt-2 text-2xl'>{poste}</h5>
        <div className='d-flex justify-content-between mt-5'>
          <Link to='#'><FacebookSvg className='w-[20px] h-[20px]' color={"black"} size={30}/></Link>
          <Link to='#'><TwitterSvg className='w-[20px] h-[20px]' color={"black"} size={30}/></Link>
          <Link to='#'><InstagramSvg className='w-[20px] h-[20px]' color={"black"} size={30}/></Link>
          <Link to='#'><LinkedInSvg className='w-[20px] h-[20px]' color={"black"} size={30}/></Link>
        </div>
      </div>
    </>
  )
}

export default CardTeam
