import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
  };

  export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    }
    
    const logout = () => {
      setUser(initialAuthState)
    };

    const isAuth = Boolean(user.email);

    return (
        <AuthContext.Provider value = {{ user, login, logout, isAuthenticated: isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authState = useContext(AuthContext);
    return authState;
}