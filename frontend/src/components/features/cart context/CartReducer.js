const CartReducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        let { id, amount, ad } = action.payload;

        // find existing ad

        let existingProduct = state.cart.find((curItem) => curItem.id === id);

        if (existingProduct) {
            let updateProduct = state.cart.map((curItem) => {
                if (curItem.id === id) {
                    let incAmount = curItem.amount + 1;
                    if (incAmount >= curItem.max_order) {
                        incAmount = curItem.max_order;
                    }
                    return {
                        ...curItem,
                        amount: incAmount,
                    };
                } else {
                    return curItem;
                }
            });
            return {
                ...state,
                cart: updateProduct,
            };
        } else {
            let cartProduct;
            cartProduct = {
                id: id,
                amount,
                title: ad.title,
                max_order: ad.max_order,
                image: ad.images[0].image,
                price: ad.sell_price,
            };
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };
        }
    }

    // to set increment and decrement
    if (action.type === 'SET_DECREMENT') {
        let updateProduct = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
                let decAmount = curItem.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...curItem,
                    amount: decAmount,
                };
            } else {
                return curItem;
            }
        });

        return { ...state, cart: updateProduct };
    }
    if (action.type === 'SET_INCREMENT') {
        let updateProduct = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
                let incAmount = curItem.amount + 1;
                if (incAmount >= curItem.max_order) {
                    incAmount = curItem.max_order;
                }
                return {
                    ...curItem,
                    amount: incAmount,
                };
            } else {
                return curItem;
            }
        });

        return { ...state, cart: updateProduct };
    }

    // clear cart
    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: [],
        };
    }

    // count total item in cart
    if (action.type === 'CART_TOTAL_ITEM') {
        let updatedItemVal = state.cart.reduce((initialVal, curElm) => {
            let { amount } = curElm;
            initialVal = initialVal + amount;
            return initialVal;
        }, 0);

        return {
            ...state,
            total_item: updatedItemVal,
        };
    }

    // calculation of total price
    if (action.type === 'CART_TOTAL_PRICE') {
        let totalPrice = state.cart.reduce((initialVal, curVal) => {
            let { price, amount } = curVal;

            initialVal = initialVal + price * amount;
            return initialVal;
        }, 0);
        return {
            ...state,
            total_amount: totalPrice,
        };
    }

    // to remove item from cart
    if (action.type === 'REMOVE_ITEM') {
        let updateCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );
        return {
            ...state,
            cart: updateCart,
        };
    }
    return state;
};

export default CartReducer;
