import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService';
// import * as userServise from '../../../services/userService';


const Gallery = () => {
    const [firstHalf, setFirstHalf] = useState([]);
    const [secondHalf, setSecondHalf] = useState([]);
    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);
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
    
    // let filtered = [];
    
    // let animalsText = allAnimals?.map(x => x.name.toLowerCase() + x.latin_name.toLowerCase() + x.animal_type.toLowerCase() + x.diet.toLowerCase());

//    console.log(animalsText);
//    let found = [];

   if(allAnimals.length > 0) {
       console.log(allAnimals);
   }
    const searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        let foundByName = allAnimals?.filter(x => {return x.name.search(inputText) != -1 } );
        let foundByLatinName = allAnimals?.filter(x => {return x.latin_name.search(inputText) != -1 } );
        let foundByAnimalType = allAnimals?.filter(x => {return x.animal_type.search(inputText) != -1 } );
        let foundByDiet = allAnimals?.filter(x => {return x.diet.search(inputText) != -1 } );

        let result = foundByName.concat(foundByLatinName, foundByAnimalType, foundByDiet);
        setFound(result);
    }
        // const regex = new RegExp(inputText, 'g', 'i');
        // found = animalsText.map(x => regex.exec(x));
        // console.log(animalsText[0]);
        // found.filter(x => x !== null);
        // console.log(found);
        // found = animalsText[0].filter(x => x.includes(inputText));
        // filtered = result;
        // found = animalsText.filter(x => x.includes(inputText))
    

    console.log(inputText);
    console.log(found);


    // console.log(allAnimals);
    // console.log(user);
    
    // const searchFunction = () => {
    // }

    return (
<>
        <header className='name'>
            <p className='user'>Name</p>
        </header>
        <div className='searchbar'>
            <input className='input' placeholder='mon...' onChange={searchHandler}></input>
            {/* <button className='search' onClick={searchFunction}>search</button> */}
        </div>
  
        <ul className='container'>
        {found.length>0
         ? found?.map(x => <SingleCard key={x.id} animal={x} />)
         : allAnimals?.map(x => <SingleCard key={x.id} animal={x} />)
        }
        </ul>
        </>
    )
};

export default Gallery;