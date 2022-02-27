import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update'

import * as cardServise from '../../../services/cardService';
// import * as userServise from '../../../services/userService';


const Gallery = () => {
<<<<<<< HEAD
    const [allArticles, setAllArticles] = useState([]);
=======
    const [allFilms, setAllFilms] = useState([]);
>>>>>>> parent of 96ffc4d (fix search - finally working)


    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);
<<<<<<< HEAD
    // const [user, setUser] = useState();
=======
    const [user, setUser] = useState();

    const forseUpdate = useForceUpdate();
>>>>>>> parent of 96ffc4d (fix search - finally working)

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setAllArticles(result);
        })
    }, []);


    
<<<<<<< HEAD
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
=======
    let sixteenFilms = allFilms.slice(0,16); 
    
    if(sixteenFilms.length > 0) {
        console.log(sixteenFilms);
    }
    
    const searchHandler = (e) => {
        e.preventDefault();
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        let foundByTitle = sixteenFilms?.filter(x => {return x.title.toLowerCase().search(inputText) != -1 } );
        let foundByDescription = sixteenFilms?.filter(x => {return x.description.toLowerCase().search(inputText) != -1 } );
        
        console.log(foundByTitle);
        console.log(foundByDescription);  
        let result = foundByTitle.concat(foundByDescription);
        setFound(result);       
        
        setTimeout(()=> console.log('some delay'), 1000);
        forseUpdate();
    }
    
    console.log(inputText);
    console.log(found);
    
    if (found.length > 0) {
>>>>>>> parent of 96ffc4d (fix search - finally working)
        return (
            <>
                <header className='name'>
                    <p className='user'>Name</p>
                </header>
                <div className='searchbar'>
<<<<<<< HEAD
                    <input className='input' placeholder='...' onChange={searchHandler}></input>
                </div>
          
                <ul className='container'>
                  {allArticles?.map(x => <SingleCard key={x.id} article={x} />)}
                </ul>
                </>)
    }
=======
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
>>>>>>> parent of 96ffc4d (fix search - finally working)

};

export default Gallery;