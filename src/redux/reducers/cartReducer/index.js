import {ADD_TO_CART, CLEAR_ITEMS, MINUS_ITEM, PLUS_ITEM, REMOVE_ITEMS_BY_ID} from "./constants";
import produce from 'immer';
import {map, reduce} from 'lodash';


const initState = {
    products: {},
    totalPrice: 0,
    productsCount: 0,
};

const cartReducer= (state = initState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_TO_CART:
                if (!draft.products[action.payload.productId]) {
                    draft.products[action.payload.productId] = [];
                }
                draft.products[action.payload.productId].push(action.payload);
                break;
            case PLUS_ITEM:
                draft.products[action.payload].push(draft.products[action.payload][0]);
                break;
            case MINUS_ITEM:
                if (draft.products[action.payload].length > 1) {
                    draft.products[action.payload].shift();
                }
                break;
            case REMOVE_ITEMS_BY_ID:
                delete draft.products[action.payload];
                break;
            case CLEAR_ITEMS:
                draft.products = {};
                break;
            default:
        }

        const result = reduce(map(draft.products), (prev, cur) => prev.concat(cur), []);
        draft.totalPrice = result.reduce((total, obj) => obj.price + total, 0);
        draft.productsCount = result.length;
    });
};

export default cartReducer;
