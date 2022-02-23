import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService'

const Gallery = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setCards(result);
        })
    }, []);

    const allImages = cards.message;
    console.log(cards.message);

    return (
        <>
        <input className='input' placeholder='search'></input>
        <ul className='container'>
            {allImages.map(x => <SingleCard key={x} card={x} />)}
        </ul>
        </>
    )
};

export default Gallery;