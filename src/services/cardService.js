// const baseUrl = 'https://zoo-animal-api.herokuapp.com';
const baseUrl = 'https://ghibliapi.herokuapp.com';

export const getAll = async () => {
    try {
        let response = await fetch(`${baseUrl}/films`, {mode:'cors'});
        // console.log(response);
        let films = await response.json();
        // console.log(animals);
        return films;
    } catch (error) {
        console.log({message: error.message});
    }
};

// export const getHalf = async () => {
//     try {
//         let response = await fetch(`${baseUrl}/animals/rand/8`, {mode:'cors'});
//         // console.log(response);
//         let animals = await response.json();
//         // console.log(animals);
//         return animals;
//     } catch (error) {
//         console.log({message: error.message});
//     }
// };

