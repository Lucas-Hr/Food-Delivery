import React , { useState } from 'react'
import FoodCard from '../../components/admin/FoodCard'
import { motion } from 'framer-motion'
import Categorie from '../../components/menu/Categorie'
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



function Menu() {
const categories = ['All','Asian Food','Malagasy Food', 'Fast Food' , 'Korean Food', 'Cocktails', 'Cake'];
const [categorie, setCategorie] = useState('All');
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
            title: "Pizza Pepperoni",
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

  return (
      <div className='bg-[#F2F2F2] w-full px-8 py-4'>
        <h1 className='text-[#464255] text-2xl font-semibold'>Food List</h1>
        <h3 className='text-[#A3A3A3]'>Welcome back to DeliverEats admin!</h3>
        <div className='mt-10 flex '>
          <Categorie categories={categories} setCategorie={setCategorie}/>
          <div className='flex flex-wrap justify-between w-full  overflow-scroll ms-10'>
          {categorie === 'All' ?   
                food.map((f, index) => {
                    return (
                        <motion.div
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1}}
                            key={index} 
                        >
                            <FoodCard img={f.img} title={f.title} ingredients={f.ingredients} price={f.price} />
                        </motion.div>
                    )
                }) : 
                
                food.filter((f) => f.category === categorie)
                .map((f, index) => {
                    return (
                        <motion.div
                            initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1}}
                            key={index}
                        >
                            <FoodCard img={f.img} title={f.title} ingredients={f.ingredients} price={f.price} />
                        </motion.div>
                    )
                })}
          </div>
        
        </div>
      </div>
  )
}

export default Menu