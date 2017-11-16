"use strict"

/* Add TO Cart Actişons */

export function addToCart(book) {
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}