import {ADD_TO_CART, CLEAR_ITEMS, MINUS_ITEM, PLUS_ITEM, REMOVE_ITEMS_BY_ID} from "./constants";


export const addToCart = ({productId, type, size}) => (dispatch, getState) => {
    const pizzas = getState().products.data;
    const pizzaObj = pizzas.find(obj => obj.productId === productId);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            productId: pizzaObj.productId,
            imageUrl: pizzaObj.imageUrl,
            name: pizzaObj.name,
            price: pizzaObj.price,
            type,
            size,
        },
    });
};

export const plusItem = productId => ({
    type: PLUS_ITEM,
    payload: productId,
});

export const minusItem = productId => ({
    type: MINUS_ITEM,
    payload: productId,
});

export const removeItemsById = productId => ({
    type: REMOVE_ITEMS_BY_ID,
    payload: Number(productId),
});

export const clearItems = {
    type: CLEAR_ITEMS
};
