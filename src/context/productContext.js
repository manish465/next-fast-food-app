import { createContext, useState } from "react";

export const productContext = createContext();

export const ProductContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (element) => {
        setCart((list) => {
            if (list.length === 0) {
                return [element];
            }
            if (list.find((el) => el.id === element.id)) {
                const index = list.findIndex((el) => el.id === element.id);
                list[index].multiple += 1;
                return list;
            } else {
                return [...list, element];
            }
        });
    };
    const removeFromCart = (id) => {
        setCart((list) => {
            if (list.length === 0) {
                return [];
            }
            const index = list.findIndex((el) => el.id === id);
            if (list[index].multiple > 1) {
                list[index].multiple -= 1;
                return list;
            }
            list.splice(index, 1);
            return list;
        });
    };
    return (
        <productContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
