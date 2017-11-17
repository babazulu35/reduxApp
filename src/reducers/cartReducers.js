"use strict"

/* CART REDUCERS */

export function cartReducers(state = { carts: [] }, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return { 
                ...state, 
                carts:action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }
            break;
        case "DELETE_CART_ITEM":
            return {
                ...state,
                carts:action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }
            return { carts: [...state, ...action.payload] }
        case "UPDATE_CART":
            const currentCartUpdate = [...state.carts];

            const indexToUpdate = currentCartUpdate.findIndex(book => { return book._id === action._id });

                    
            const newCartToUpdate = { 
                ...currentCartUpdate[indexToUpdate],
                quantity: currentCartUpdate[indexToUpdate].quantity + action.unit
            }            

            let cartUpdate = [...currentCartUpdate.slice(0,indexToUpdate),newCartToUpdate,...currentCartUpdate.slice(indexToUpdate + 1)];

            return {
                ...state,
                carts:cartUpdate,
                totalAmount: totals(cartUpdate).amount,
                totalQty: totals(cartUpdate).qty
            }
            
            break;

    }
    return state;
}

export function totals(payloadArr) {
    const totalAmount = payloadArr.map(cartArr => {
        return cartArr.price * cartArr.quantity;
    }).reduce((a,b) => {
        return a +b
    },0);

    const totalQty = payloadArr.map(qty => {
        return qty.quantity;
    }).reduce((a,b) => {
        return a + b;
    },0)

    return {amount:totalAmount.toFixed(2),qty:totalQty}
}