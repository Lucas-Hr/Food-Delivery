import React from 'react'
import CardBestSeller from './CardBestSeller'
import Sushi from '../assets/img/sushi.jpg'
import Arrow from '../assets/img/arrow.png'

function FoodList() {
  return (
    <section className='px-52 py-36'>
        <select name="" id="" >
            <option value="">Name</option>
            <option value="">Price</option>
        </select>
        <div className='d-flex justify-content-between vh-100'>
            <div>
                <input type="text" name="" id="" placeholder='Search food...'/>
                <h2 className='mt-5 text-3xl' style={{borderLeft : "4px solid #FF8000", paddingLeft : "10px"}}>Categories</h2>
                <div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>All</h6>
                    </div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>Asian food</h6>
                    </div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>Malagasy food</h6>
                    </div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>Fast food</h6>
                    </div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>Korean food</h6>
                    </div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>Cocktails</h6>
                    </div>
                    <div className='d-flex my-4'>
                        <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                        <h6>Cake</h6>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-wrap justify-content-between ms-5 overflow-scroll '>
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
                <CardBestSeller img={Sushi} title="Sushi" ingredients="Toamto, Cheese, Olive" prix="100" />
            </div>
        </div>
    </section>
  )
}

export default FoodList