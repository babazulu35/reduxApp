"use strict"

/* BOOKS REDUCERS  */
export function booksReducers(state = {
    books: [{
            id: 1,
            title: 'this is book title',
            description: 'this is the book desctription',
            price: 54.33

        },
        {
            id: 2,
            title: 'this issecond book title',
            description: 'this is second the book desctription',
            price: 23.33

        }
    ]
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            return {...state, books: [...state.books] }
            break;
        case "POST_BOOK":
            return { books: [...state.books, ...action.payload] }
            break;
        case "DELETE_BOOK":
            const currentBookDelete = [...state.books]
            const indexToDelete = currentBookDelete.findIndex(book => { return book.id === action.payload.id })
            return { books: [...currentBookDelete.slice(0, indexToDelete), ...currentBookDelete.slice(indexToDelete + 1)] }
            break;
        case "UPDATE_BOOK":
            const currentBookToUpdate = [...state.books]
            const indexToUpdate = currentBookToUpdate.findIndex(book => {
                return book.id === action.payload.id
            })

            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }
            console.log("What is it newBookToUpdate", newBookToUpdate);
            return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)] }
            break;
    }
    return state;
}