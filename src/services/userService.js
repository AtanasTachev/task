const baseUrl = 'http://localhost:3060';

export const getUser = async () => {
    let response = await fetch(`${baseUrl}/googleAuth`);
    let user = await response.json();
    return user;
}

export const saveUser = async ({...userData}) => {
    let response = await fetch(`${baseUrl}/saveUser`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify({...userData})
            });
        let result = await response.json();
        console.log(result);
        return result;
    }

// export const login = async ({user}) => {

// }