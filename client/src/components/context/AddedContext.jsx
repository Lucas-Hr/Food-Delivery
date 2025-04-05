import { createContext, useContext, useState } from "react";

export const AddedContext = createContext();

export const AddedProvider = ({children}) => {
    const [isAdded, setIsAdded] = useState(false)
    return (
        <AddedContext.Provider value={{isAdded, setIsAdded}}>
            {children}
        </AddedContext.Provider>
    )
}

export const useAdded = () => useContext(AddedContext);