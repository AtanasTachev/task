import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService';
// import * as userServise from '../../../services/userService';


const Gallery = () => {
    const [allArticles, setAllArticles] = useState([]);


    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);
    // const [user, setUser] = useState();

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setAllArticles(result);
        })
    }, []);


    
   if(allArticles.length > 0) {
       console.log(allArticles);
   }
    const searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        let foundByTitle = allArticles?.filter(x => {return x.title.toLowerCase().search(inputText) != -1 } );
        let foundBySummary = allArticles?.filter(x => {return x.summary.toLowerCase().search(inputText) != -1 } );

        let result = foundByTitle.concat(foundBySummary);
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
            <input className='input' placeholder='...' onChange={searchHandler}></input>
        </div>
  
        <ul className='container'>
          {found?.map(x => <SingleCard key={x.id} article={x} />)}
        </ul>
        </>)
    } else {
        return (
            <>
                <header className='name'>
                    <p className='user'>Name</p>
                </header>
                <div className='searchbar'>
                    <input className='input' placeholder='...' onChange={searchHandler}></input>
                </div>
          
                <ul className='container'>
                  {allArticles?.map(x => <SingleCard key={x.id} article={x} />)}
                </ul>
                </>)
    }

};

export default Gallery;