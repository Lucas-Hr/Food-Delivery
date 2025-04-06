import { createContext, useContext, useState } from "react";

export const AddedContext = createContext();

export const AddedProvider = ({children}) => {
    const [isAdded, setIsAdded] = useState({})

    const setAdded = (key, status) => {
        setIsAdded((prev) => ({
            ...prev, [key] : status
        }));
    };
    return (
        <AddedContext.Provider value={{isAdded, setIsAdded,setAdded}}>
            {children}
        </AddedContext.Provider>
    )
}

export const useAdded = () => useContext(AddedContext);