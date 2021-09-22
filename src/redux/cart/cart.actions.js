import {CartActionTypes} from './cart.types';


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

    
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item

    
})

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT,
    payload: item

    
})
export const reduceItemByArrow = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_ARROW,
    payload: item

    
})