import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService';
// import * as userServise from '../../../services/userService';


const Gallery = () => {
    const [firstHalf, setFirstHalf] = useState([]);
    const [secondHalf, setSecondHalf] = useState([]);
    // const [user, setUser] = useState();


    useEffect(() => {
        cardServise.getHalf()
        .then(result => {
            setFirstHalf(result);
        })
    }, []);
    useEffect(() => {
        cardServise.getHalf()
        .then(result => {
            setSecondHalf(result);
        })
    }, []);

 

    const allAnimals = firstHalf.concat(secondHalf);
    console.log(allAnimals);
    // console.log(user);

    return (
        <>
        <header className='name'>
            <p className='user'>Name</p>
        </header>
        <div className='searchbar'>
            <input className='input' placeholder='mon...'></input>
            <button className='search'>search</button>
        </div>
        <ul className='container'>
            {allAnimals?.map(x => <SingleCard key={x.id} animal={x} />)}
        </ul>
        </>
    )
};

export default Gallery;