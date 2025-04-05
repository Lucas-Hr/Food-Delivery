import React from 'react'
import Logo from '../../assets/img/DeliverEats.svg'
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import Twitter from '../../assets/img/twitter.svg'
import LinkedIn from '../../assets/img/linkedin.svg'
import Address from '../../assets/img/address.png'
import Phone from '../../assets/img/phone.png'
import Mail from '../../assets/img/mail.png'

const Footer = () => {
  return (
    <>
      <section className='py-5 flex justify-between px-52 bg-[#20202C]'>
        <div className='w-50'>
          <img src={Logo} className="inline-block  w-[200px]" alt="logo" />
          <p className='text-white mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam neque corporis eligendi 
            voluptas provident nihil dolores sunt, fuga ab vitae cum vel quibusdam obcaecati perspiciatis, 
            at atque ducimus! Error, ex!
          </p>
          <div className='flex mt-8'>
            <img src={Facebook} style={{width : 30, height: 30}} className="me-3 cursor-pointer"alt="" srcset="" />
            <img src={Instagram} style={{width : 30, height: 30}} className="me-3 cursor-pointer"alt="" srcset="" />
            <img src={Twitter} style={{width : 30, height: 30}} className="me-3 cursor-pointer"alt="" srcset="" />
            <img src={LinkedIn} style={{width : 30, height: 30}} className="me-3 cursor-pointer"alt="" srcset="" />
          </div>
        </div>

        <div>
          <h4 className='text-white text-xl font-semibold pb-2' style={{borderBottom : ' solid 4px #FF8000'}}>Links</h4>
          <h5 className="text-white flex my-3">Home</h5>
          <h5 className="text-white flex my-3">Menu</h5> 
        </div>   


        <div>
          <h4 className='text-white font-semibold text-xl pb-2' style={{borderBottom : ' solid 4px #FF8000'}}>Contact us</h4>
          <div className='flex my-3'>
            <img src={Address} style={{width : 30, height: 30}} alt='address'/>
            <h5 className='text-white ms-2'>Analamahitsy, Antananarivo</h5>
          </div>
          <div className='flex my-3'>
            <img src={Mail} style={{width : 30, height: 30}} alt='address'/>
            <h5 className='text-white ms-2'>delivereats@gmail.com</h5>
          </div>
          <div className='flex my-3'>
            <img src={Phone} style={{width : 30, height: 30}} alt='address'/>
            <h5 className='text-white ms-2'>+261 32 62 766 12 <br /> +261 32 29 135 37</h5>
          </div>
        </div>       
      </section>
      <div className="text-center text-white fw-semibold py-3" style={{backgroundColor : "#232328"}}>
        Copyright 2024 <span style={{color : "#FF8000"}} className='fw-bold'>DeliverEats.</span> All right reserved.
      </div>
    </>
  )
}

export default Footer;