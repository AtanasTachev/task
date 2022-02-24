import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService'

const Gallery = () => {
    const [firstHalf, setfFirstHalf] = useState([]);
    const [secondHalf, setSecondHalf] = useState([]);


    useEffect(() => {
        cardServise.getHalf()
        .then(result => {
            setfFirstHalf(result);
        })
    }, []);
    useEffect(() => {
        cardServise.getHalf()
        .then(result => {
            setSecondHalf(result);
        })
    }, []);

    const allAnimals = firstHalf.concat(secondHalf);
    // console.log(allAnimals);

    return (
        <>
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