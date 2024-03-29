"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';

/* IMPORT COMBINE REDUCERS */
import reducers from './reducers/index'

/* Import Actions */
import { addToCart } from './actions/cartActions'

import { postBooks, deleteBooks, updateBooks } from './actions/booksActions'

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render (
    <Provider store={store}>
        <BooksList />
    </Provider>,document.getElementById('app')
);

/* store.dispatch(postBooks(
    [{
            id: 1,
            title: 'this is book title',
            description: 'this is the book desctription',
            price: 33.33

        },
        {
            id: 2,
            title: 'this issecond book title',
            description: 'this is second the book desctription',
            price: 23.33

        }
    ]
)) */


/* store.dispatch(updateBooks({
    id: 2,
    title: 'ContiConti'
}))

store.dispatch(addToCart([{ id: 2 }])) */