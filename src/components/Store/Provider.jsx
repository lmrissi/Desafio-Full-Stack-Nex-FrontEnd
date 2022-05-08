import React from "react";
import Context from './Context'
import useStorage from 'utils/useStorage.js';

const StoreProvider = ({children}) => {
    const defaultUser = {
        id: '',
        username: ''
    };

    const [token, setToken] = useStorage('token');
    const [user, setUser] = useStorage('user', defaultUser);

    return (
        <Context.Provider
            value={{
                token,
                setToken,
                user,
                setUser
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default StoreProvider;