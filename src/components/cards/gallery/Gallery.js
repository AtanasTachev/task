import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService';
// import * as userServise from '../../../services/userService';


const Gallery = () => {
    const [allFilms, setAllFilms] = useState([]);


    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);
    const [user, setUser] = useState();

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setAllFilms(result);
        })
    }, []);

   let sixteenFilms = allFilms.splice(0,16); 

   if(sixteenFilms.length > 0) {
       console.log(sixteenFilms);
   }

    const searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        let foundByTitle = sixteenFilms?.filter(x => {return x.title.search(inputText) != -1 } );
        let foundByDescription = sixteenFilms?.filter(x => {return x.description.search(inputText) != -1 } );


        let result = foundByTitle.concat(foundByDescription);
        setFound(result);
    }
  
    console.log(inputText);
    console.log(found);

    if (found.length > 0) {
    return (
        <>
            <header className='name'>
                <p className='user'>Name</p>
            </header>
            <div className='searchbar'>
                <input className='input' placeholder='mon...' onChange={searchHandler}></input>
            </div>
    
            <ul className='container'>
            {found?.map(x => <SingleCard key={x.id} film={x} />)}
            </ul>
        </>)
    } else {
        return (
        <>
            <header className='name'>
                <p className='user'>Name</p>
            </header>
            <div className='searchbar'>
                <input className='input' placeholder='mon...' onChange={searchHandler}></input>
            </div>
        
            <ul className='container'>
                {sixteenFilms?.map(x => <SingleCard key={x.id} film={x} />)}
            </ul>
        </>)
    }

};

export default Gallery;