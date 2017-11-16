"use strict"

/* CART REDUCERS */

export function cartReducers(state = { carts: [] }, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return { carts: [...state, ...action.payload] }
        break;
        case "DELETE_CART_ITEM":
            return { carts: [...state, ...action.payload] }

    }
    return state;
}