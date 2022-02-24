const baseUrl = 'http://localhost:3060';

export const getUser = async () => {
    let response = await fetch(`${baseUrl}/googleAuth`);
    let user = await response.json();
    return user;
}