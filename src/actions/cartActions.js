"use strict"

/* Add TO Cart Actişons */

export function addToCart(book) {
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}

export function deleteCartItem(id) {
    return {
        type: "DELETE_CART_ITEM",
        payload: id
    }
}


export function updateCart(id, unit) {
    return {
        type: "UPDATE_CART",
        _id: id,
        unit: unit
    }
}