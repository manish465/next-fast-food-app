import { createContext, useReducer } from "react";

export const productContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const id = action.payload.id;
            const includedId = state.map((item) => item.id).includes(id);
            if (includedId) {
                return state.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [...state, action.payload];
            }
        case "REMOVE_FROM_LIST":
            return state.filter((item) => item.id !== action.payload.id);
    }
};

export const ProductContext = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, []);
    return (
        <productContext.Provider value={{ cart, dispatch }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;

// export const addToList = (list, element) => {
//     if (list.length === 0) {
//         return [element];
//     }
//     if (list.find((el) => el.id === element.id)) {
//         const index = list.findIndex((el) => el.id === element.id);
//         list[index].multiple += 1;
//         return list;
//     } else {
//         return [...list, element];
//     }
// };

// export const removeFromList = (list, id) => {
//     if (list.length === 0) {
//         return [];
//     }
//     const index = list.findIndex((el) => el.id === id);
//     if (list[index].multiple > 1) {
//         list[index].multiple -= 1;
//         return list;
//     }
//     list.splice(index, 1);
//     return list;
// };
