import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useContext, useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../../contexts/AuthContext'

import * as cardServise from '../../../services/cardService';


const Gallery = () => {
    const [allFilms, setAllFilms] = useState([]);

    // const user = localStorage.getItem('loginData').name;
    
    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );
    //   const getUser = async () => {
    //     const res = await fetch('/api/google-login');
    //     const data = await res.json();
    //     console.log(data);
    //     // localStorage.getItem('loginData', JSON.parse(data));
    //     setLoginData(data)
    //   };

    //   const user = getUser();
    //   console.log(user);
    // const user = loginData.name;
    const user = 'NAME in GOOGLE';  

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setAllFilms(result);
        })
    }, []);
    
    let sixteenFilms = allFilms.slice(0,16); 
    
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
      };
    
    const searchHandler = (e) => {
        e.preventDefault();
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        let foundByTitle = sixteenFilms?.filter(x => {return x.title.toLowerCase().search(inputText) !== -1 } );
        let foundByDescription = sixteenFilms?.filter(x => {return x.description.split('.').slice(0,2).join(' ').toLowerCase().search(inputText) !== -1 } );
        

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
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText={'Logout'}
                        uxMode='redirect'
                        redirectUri="http://localhost:3000"
                        cookiePolicy={'single_host_origin'}
                        onClick={handleLogout}
                    ></GoogleLogin>
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
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText={'Logout'}
                        uxMode='redirect'
                        redirectUri="http://localhost:3000"
                        cookiePolicy={'single_host_origin'}
                        onClick={handleLogout}
                    ></GoogleLogin>
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
