import { createContext, useContext, useState } from "react";

export const QuantityContext = createContext();

export const QuantityProvider = ({children}) => {
    const [quantities, setQuantities] = useState(0);
    const incrementQuantity = (key) => {
        setQuantities(prev => ({
            ...prev,
            [key]: (prev[key] || 0) + 1
        }));
    };

    const decrementQuantity = (key) => {
        setQuantities(prev => ({
            ...prev,
            [key]: Math.max((prev[key] || 0) - 1, 0)
        }));
    };
    return (
        <QuantityContext.Provider value={{quantities, setQuantities, incrementQuantity, decrementQuantity}}>
            {children}
        </QuantityContext.Provider>
    )
}

export const useQuantity = () => useContext(QuantityContext);