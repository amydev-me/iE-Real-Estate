import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const updateUser = (data) => {
        setCurrentUser(data);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [ currentUser])

    const valueToShare = {
        currentUser,
        updateUser
    }

    return <AuthContext.Provider value={valueToShare}>{ children }</AuthContext.Provider>;
}