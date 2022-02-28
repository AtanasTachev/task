import { createContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {user: ''};

  export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    }

    return (
        <AuthContext.Provider value = {{login}}>
            {children}
        </AuthContext.Provider>
    )
}
