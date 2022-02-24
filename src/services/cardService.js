const baseUrl = 'https://zoo-animal-api.herokuapp.com';

export const getHalf = async () => {
    let response = await fetch(`${baseUrl}/animals/rand/8`)
    let cards = await response.json();
    return cards;
};