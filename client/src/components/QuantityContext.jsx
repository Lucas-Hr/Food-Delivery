import { createContext, useContext, useState } from "react";

export const QuantityContext = createContext();

export const QuantityProvider = ({children}) => {

    const [quantity, setQuantity] = useState(0);
    return (
        <QuantityContext.Provider value={{quantity, setQuantity}}>
            {children}
        </QuantityContext.Provider>
    )
}

export const useQuantity = () => useContext(QuantityContext);