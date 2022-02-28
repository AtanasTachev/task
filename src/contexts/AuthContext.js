import { createContext, useContext } from "react";
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
    
    // const logout = () => {
    //   setUser(initialAuthState)
    // };

    // const isAuth = Boolean(user.email);

    return (
        <AuthContext.Provider value = {{login, user}}>
            {children}
        </AuthContext.Provider>
    )
}

// export const useAuth = () => {
//     const authState = useContext(AuthContext);
//     return authState;
// }