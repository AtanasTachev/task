import { useState } from 'react';

const useLocalStorage = ( key, initialValue ) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);
            return item 
            ? item
            : initialValue;
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            localStorage.setItem(key, value)
            setState(value);
        } catch (err) {
            console.log(err);
        }
    };
    return [
        state, setItem
    ];
};

export default useLocalStorage;