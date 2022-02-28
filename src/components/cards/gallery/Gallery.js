import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';
import { user } from '../../../contexts/AuthContext'

import * as cardServise from '../../../services/cardService';


const Gallery = () => {
    const [allFilms, setAllFilms] = useState([]);
    
    
    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);
    const [user, setUser] = useState('');
    
    const name = localStorage.getItem('user');
    if(name) {
        setUser(name);
    }
    

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setAllFilms(result);
        })
    }, []);
    
    let sixteenFilms = allFilms.slice(0,16); 
    

    
    const searchHandler = (e) => {
        e.preventDefault();
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        let foundByTitle = sixteenFilms?.filter(x => {return x.title.toLowerCase().search(inputText) != -1 } );
        let foundByDescription = sixteenFilms?.filter(x => {return x.description.split('.').slice(0,2).join(' ').toLowerCase().search(inputText) != -1 } );
        

        let result = foundByTitle.concat(foundByDescription);
        let uniqueElements = result.reduce((unique, o) => {
            if(!unique.some(obj => obj.id === o.id && obj.title === o.title)) {
              unique.push(o);
            }
            return unique;
        },[]);

        setFound(uniqueElements);    
   
    
    }
    
    
    if (found.length > 0) {
        return (
            <>
                <header className='name'>
                    <p className='user'>{user}</p>
                </header>
                <div className='searchbar'>
                    <input className='input' placeholder='...' onChange={searchHandler}></input>
                </div>
        
                <ul className='container'>
                {found?.map(x => <SingleCard key={x.id} film={x} />)}
                </ul>
            </>)
        } else {
            return (
            <>
                <header className='name'>
                    <p className='user'>{user}</p>
                </header>
                <div className='searchbar'>
                    <input className='input' placeholder='...' onChange={searchHandler}></input>
                </div>
            
                <ul className='container'>
                    {sixteenFilms?.map(x => <SingleCard key={x.id} film={x} />)}
                </ul>
            </>)
        }

};

export default Gallery;
