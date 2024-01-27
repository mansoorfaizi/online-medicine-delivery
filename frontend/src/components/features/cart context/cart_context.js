import React, { useEffect } from 'react';
import { createContext, useContext, useReducer } from 'react';
import reducer from './CartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem('shoppingCart');
    if (!newCartData) {
        return [];
    } else {
        return JSON.parse(newCartData);
    }
};
const initialState = {
    cart: getLocalCartData(),
    total_item: '',
    total_amount: '',
    delivery_fee: 1000,
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // to add data in cart
    const addToCart = (id, amount, ad) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, amount, ad } });
    };

    // increment and decrement the product
    const setDecrease = (id) => {
        dispatch({ type: 'SET_DECREMENT', payload: id });
    };
    const setIncrease = (id) => {
        dispatch({ type: 'SET_INCREMENT', payload: id });
    };

    // to remove the individual item from cart
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    // to clear the cart

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    // to add data in local storage
    // get vs set
    useEffect(() => {
        dispatch({ type: 'CART_TOTAL_ITEM' });
        dispatch({ type: 'CART_TOTAL_PRICE' });
        localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                clearCart,
                setDecrease,
                setIncrease,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
