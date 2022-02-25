import './gallery.css';
import SingleCard from '../singleCard/SingleCard';
import { useEffect, useState } from 'react';

import * as cardServise from '../../../services/cardService';
// import * as userServise from '../../../services/userService';


const Gallery = () => {
    const [allAnimals, setAllAnimals] = useState([]);

    // const [firstHalf, setFirstHalf] = useState([]);
    // const [secondHalf, setSecondHalf] = useState([]);
    const [inputText, setInputText] = useState('');
    const [found, setFound] = useState([]);
    // const [user, setUser] = useState();

    useEffect(() => {
        cardServise.getAll()
        .then(result => {
            setAllAnimals(result);
        })
    }, []);


    // useEffect(() => {
    //     cardServise.getHalf()
    //     .then(result => {
    //         setFirstHalf(result);
    //     })
    // }, []);
    // useEffect(() => {
    //     cardServise.getHalf()
    //     .then(result => {
    //         setSecondHalf(result);
    //     })
    // }, []);

    // const allAnimals = firstHalf.concat(secondHalf);
    
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
          {found?.map(x => <SingleCard key={x.id} animal={x} />)}
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
                  {allAnimals?.map(x => <SingleCard key={x.id} animal={x} />)}
                </ul>
                </>)
    }
    //     {/* {found.length>0
    //     ?(<ul className='container'>
    //       {found?.map(x => <SingleCard key={x.id} animal={x} />)}
    //     </ul>)
    //      : ( <ul className='container'>
    //          {allAnimals?.map(x => <SingleCard key={x.id} animal={x} />)}
    //      </ul>)
    //     } */}
    // </>
    // )
};

export default Gallery;