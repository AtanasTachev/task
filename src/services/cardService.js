const baseUrl = 'https://ghibliapi.herokuapp.com';

export const getAll = async () => {
    try {
        let response = await fetch(`${baseUrl}/films`, {mode:'cors'});

        let films = await response.json();

        return films;
    } catch (error) {
        console.log({message: error.message});
    }
};


