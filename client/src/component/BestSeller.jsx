import React from 'react'
import CardBestSeller from './CardBestSeller'
import Lasagna from '../assets/img/lasagna.jpg'
import Mac from '../assets/img/mac.jpg'
import Sushi from '../assets/img/sushi.jpg'
import Chicken from '../assets/img/chicken.jpg'

function BestSeller() {
    return (
    <section className='py-5 vh-100' style={{backgroundColor : "#F9F9F9",padding : "0px 200px"}}>
        <div className='container'>
            <h1 className='text-center mt-5 mb-5'>Our Best Seller</h1>
            
            <div className='d-flex justify-content-between pt-5'>
                <CardBestSeller img={Lasagna} title='Sushi' ingredients='Tomato, Cheese, Olive' prix='100' />
                <CardBestSeller img={Sushi} title='Pizza' ingredients='Tomato, Cheese, Olive' prix='100' />
                <CardBestSeller img={Chicken} title='Pizza' ingredients='Tomato, Cheese, Olive' prix='100' />
                <CardBestSeller img={Mac} title='Pizza' ingredients='Tomato, Cheese, Olive' prix='100' />
            </div>
        </div>
    </section>
    )

}

export default BestSeller