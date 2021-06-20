import { createContext, useReducer } from "react";

export const productContext = createContext();

export const ProductContext = ({ children }) => {
    const initialState = [];
    const [state, dispacth] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_PRODUCT":
                const element = {
                    id: action.payload.id,
                    image: action.payload.image,
                    name: action.payload.name,
                    price: action.payload.price,
                };
                return [...state, element];
            default:
                return state;
        }
    }, initialState);
    return (
        <productContext.Provider value={{ state, dispacth }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;
