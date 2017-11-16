"use strict"
import { combineReducers } from 'redux';



/* HERE IMPORT REDUCERS TO VE COMBINED */
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

/* HERE COMBONEE THE REDUCERS */

export default combineReducers({
    books: booksReducers,
    carts: cartReducers
})