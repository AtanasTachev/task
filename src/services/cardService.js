const baseUrl = 'https://dog.ceo/api/breeds/image';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/random/16`)
    let cards = await response.json();
    return cards;
};