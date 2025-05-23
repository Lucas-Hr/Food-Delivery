import React from 'react'
import CardBestSeller from '../menu/CardBestSeller'
import Lasagna from '../../assets/img/lasagna.jpg'
import Mac from '../../assets/img/mac.jpg'
import Sushi from '../../assets/img/sushi.jpg'
import Chicken from '../../assets/img/chicken.jpg'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination , Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { useQuantity } from '../context/QuantityContext'

const BestSeller = () => {
    const {quantities, incrementQuantity, decrementQuantity} = useQuantity()
    const food = [
            {
                img : Lasagna,
                title : "Lasagna",
                ingredients : "Tomato, Cheese, Olive, Lasagna",
                price : "15",
                categorie : "Korean Food"
            },
            {
                img : Mac,
                title : "Mac n Cheese",
                ingredients : "Macaroni, Chesse, Beef",
                price : "20",
                categorie : "Fast Food"
            },
            {
                img : Sushi,
                title : "Sushi",
                ingredients : "Fish, Rice",
                price : "5",
                categorie : "Cocktails"
            },
            {
                img : Chicken,
                title : "Chicken",
                ingredients : "Chicken , Salad",
                price : "10",
                categorie : "Fast Food"
            }
        ]

    return (
    <motion.section 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{
           duration: 1,
         }}
        className='py-5 vh-100 px-52' style={{backgroundColor : "#F9F9F9"}}>
        <div className='container'>
            <h1 className='text-center mt-5 mb-5'>Our Best Seller</h1>
            <Swiper  
            modules={[Pagination]}
            spaceBetween={150}
            slidesPerView={3} 
            pagination={{ clickable: true }}
            className='z-1 cursor-grab'
            >
            {food.map((f, index) => {
                return (
                    <SwiperSlide key={index}>
                        <CardBestSeller img={f.img} title={f.title} ingredients={f.ingredients} price={f.price} 
                        incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} quantities={quantities}/>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    </motion.section>
    )

}

export default BestSeller