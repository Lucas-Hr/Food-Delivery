import React from 'react';
import CardTeam from './CardTeam';
import firstOne from '../assets/img/firstOne.jpg';
import secondOne from '../assets/img/secondOne.jpg';
import thirdOne from '../assets/img/thirdOne.jpg';
import fourthOne from '../assets/img/fourthOne.jpg';

const Team = () => {
    return (
        <section className='py-5 vh-100 px-52'>
            <div className='container'>
                <h1 className='text-center mt-5 mb-5'>Our Team</h1>
               
                <div className='d-flex justify-content-between '>
                    <CardTeam img={firstOne} nom='John Doe' poste='CEO' />
                    <CardTeam img={secondOne} nom='Jane Doe' poste='Designer' />
                    <CardTeam img={thirdOne} nom='Mike Ross' poste='Architect' />
                    <CardTeam img={fourthOne} nom='Mike Ross' poste='Developer' />
                </div>
            </div>
        </section>
    )
};

export default Team;