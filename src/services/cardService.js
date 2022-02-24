const baseUrl = 'https://elephant-api.herokuapp.com/elephants';

export const getElephants = async () => {
    try {
        let response = await fetch(baseUrl, {mode:'no-cors'});
        console.log(response);
        let elephants = await response.json();
        console.log(elephants);
        return elephants;
    } catch (error) {
        console.log({message: error.message});
    }
};