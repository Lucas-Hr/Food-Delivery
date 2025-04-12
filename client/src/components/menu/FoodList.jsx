import React, { useState } from 'react'
import CardBestSeller from './CardBestSeller'
import Sushi from '../../assets/img/sushi.jpg'
import Romazava from '../../assets/img/romazava.jpg'
import CheeseBurger from '../../assets/img/cheeseburger.jpg'
import Kimchi from '../../assets/img/kimchi.jpg'
import Bulgogi from '../../assets/img/bulgogi.jpg'
import ChocolateCake from '../../assets/img/chocolatecake.jpg'
import KobaRavina from '../../assets/img/kobaravina.jpg'
import Margarita from '../../assets/img/margarita.jpg'
import Mojito from '../../assets/img/mojito.jpg'
import PadThai from '../../assets/img/padthai.jpg'
import PizzaPeperoni from '../../assets/img/pizzapeperoni.jpg'
import Tonkotsu from '../../assets/img/tonkotsu.jpg'
import VanillaCake from '../../assets/img/vanillacake.jpg'
import Arrow from '../../assets/img/arrow.png'
import { motion } from 'framer-motion'
import { useQuantity } from '../context/QuantityContext'

const FoodList = () => {
    const [categorie, setCategorie] = useState('All');
    const [search, setSearch] = useState('');
    const {quantities, incrementQuantity, decrementQuantity} = useQuantity()
    const [sort, setSort] = useState('')
    const categories = ['All','Asian Food','Malagasy Food', 'Fast Food' , 'Korean Food', 'Cocktails', 'Cake'];

    const [food, setFood] = useState([
        {
            img: Sushi,
            title: "Sushi Platter",
            ingredients: "Rice, Salmon, Tuna, Avocado, Nori",
            price: 18.99,
            category: "Korean Food", // Although sushi is Japanese, I will keep the category as requested.
          },
          {
            img: Romazava,
            title: "Romazava",
            ingredients: "Beef, Anamalao, Anantsonga, Tomato, Ginger",
            price: 12.50,
            category: "Malagasy Food",
          },
          {
            img: CheeseBurger,
            title: "Classic Cheeseburger",
            ingredients: "Beef Patty, Cheddar Cheese, Lettuce, Tomato, Bun",
            price: 9.99,
            category: "Fast Food",
          },
          {
            img: Kimchi,
            title: "Kimchi Jjigae",
            ingredients: "Kimchi, Pork Belly, Tofu, Green Onions, Gochujang",
            price: 15.00,
            category: "Korean Food",
          },
          {
            img: Mojito,
            title : 'Mojito',
            ingredients: "Rum, Mint, Lime, Sugar, Soda Water",
            price: 7.50,
            category: "Cocktails",
          },
          {
            img: ChocolateCake,
            title: "Chocolate Fudge Cake",
            ingredients: "Flour, Cocoa Powder, Sugar, Eggs, Butter",
            price: 25.00,
            category: "Cake",
          },
            {
            img: PadThai,
            title: "Pad Thai",
            ingredients: "Rice Noodles, Shrimp, Tofu, Peanuts, Bean Sprouts",
            price: 16.50,
            category: "Asian Food",
          },
            {
            img: KobaRavina,
            title: "Koba Ravina",
            ingredients: "Rice Flour, Peanuts, Sugar, Banana Leaves",
            price: 5.00,
            category: "Malagasy Food",
          },
        {
            img: PizzaPeperoni,
            ingredients: "Dough, Tomato Sauce, Mozzarella Cheese, Pepperoni",
            price: 11.00,
            category: "Fast Food"
        },
        {
            img: Bulgogi,
            title: "Bulgogi",
            ingredients: "Beef, Soy Sauce, Sesame Oil, Garlic, Onions",
            price: 17.00,
            category: "Korean Food"
        },
        {
            img: Margarita,
            title: "Margarita",
            ingredients: "Tequila, Lime Juice, Cointreau, Salt",
            price: 8.00,
            category: "Cocktails"
        },
        {
            img: VanillaCake,
            title: "Vanilla Bean Cake",
            ingredients: "Flour, Sugar, Eggs, Vanilla Extract, Butter",
            price: 22.00,
            category: "Cake"
        },
        {
            img: Tonkotsu,
            title: "Tonkotsu Ramen",
            ingredients: "Noodles, Pork Broth, Pork Belly, Egg, Green Onions",
            price: 14.00,
            category: "Asian Food"
        },
        ])

    const handleSort = (e) => {
        setSort(e.target.value)
        sortFood(e.target.value)
        console.log(e.target.value)
    }

    const sortFood = (key) => {
        const sortedFood = [...food].sort((a, b) => {
            if (typeof a[key] === 'string') {
                return a[key].localeCompare(b[key]);
              } else {
                return a[key] - b[key];
              }
        })
        setFood(sortedFood)
        
    }

  return (
    <section className='px-52 py-36 relative'>
        <motion.select 
            initial={{opacity : 0, x : -200}}
            animate={{opacity : 1, x:0}}
            transition={{duration : 1}}
            name="" id=""
            className='bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm relative left-64'
            value={sort}
            onChange={handleSort}
        >
            <option value="" disabled>Sort by</option>
            <option value="title">Name</option>
            <option value="price">Price</option>
        </motion.select>
        <div className='d-flex justify-content-between vh-100 mt-2'>
            <motion.div 
                initial={{opacity : 0, x : -100}}
                animate={{opacity : 1, x:0}}
                transition={{duration : 1}}
            >
                <input 
                    className="bg-[#ffff] border-2 rounded-md py-1 px-2 shadow-sm focus:outline-none"
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Search food...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <h2 className='mt-4 text-3xl' style={{borderLeft : "4px solid #FF8000", paddingLeft : "10px"}}>Categories</h2>
                <div>
                    {categories.map((c, index) => {
                        return (
                            <motion.div
                            initial={{x:0}}
                            whileHover={{x:10}} 
                            key={index}
                            className='d-flex my-4 cursor-pointer'
                            onClick={() => {setCategorie(c)}}
                            >
                                <img src={Arrow} style={{width : 15, height : 20}} className='me-2' alt="" />
                                <h6>{c}</h6>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>

            <motion.div 
                initial={{opacity : 0, x : 100}}
                animate={{opacity : 1, x:0}}
                transition={{duration : 1}}
                className='flex flex-wrap justify-between w-full ms-5 overflow-scroll'
            >
                {categorie === 'All' ? 
                
                food.filter((f) => {
                    return search.toLowerCase() === ""
                        ? f
                        : f.title.toLowerCase().includes(search);
                    })
                    .map((f, index) => {
                    return (
                        <motion.div
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1}}
                            key={index} 
                        >
                            <CardBestSeller img={f.img} title={f.title} ingredients={f.ingredients} price={f.price} 
                            incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} quantities={quantities}
                             
                            />
                        </motion.div>
                    )
                }) : 
                
                food
                .filter((f) => f.category === categorie)
                .filter((f) => {
                    return search.toLowerCase() === ""
                        ? f
                        : f.title.toLowerCase().includes(search);
                    })
                .map((f, index) => {
                    return (
                        <motion.div
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1}}
                            key={index}
                        >
                            <CardBestSeller img={f.img} title={f.title} ingredients={f.ingredients} price={f.price} 
                            incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} quantities={quantities}
                            />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default FoodList