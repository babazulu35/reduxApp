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