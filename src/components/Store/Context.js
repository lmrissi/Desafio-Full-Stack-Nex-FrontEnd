import { createContext } from "react";

const StoreContext = createContext({
    token: null,
    setToken: () => {},
    user: null,
    setUser: () => {},
})

export default StoreContext;