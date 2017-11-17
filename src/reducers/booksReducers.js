"use strict"

/* BOOKS REDUCERS  */
export function booksReducers(state = {
    books: []
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            return {...state, books: [...state.books] };
            break;
        case "POST_BOOK":
            return { books: [...state.books, ...action.payload] }
            break;
        case "DELETE_BOOK":
            const currentBookDelete = [...state.books]
            const indexToDelete = currentBookDelete.findIndex(book => { return book._id == action.payload })
            return { books: [...currentBookDelete.slice(0, indexToDelete), ...currentBookDelete.slice(indexToDelete + 1)] }
            break;
        case "UPDATE_BOOK":
            const currentBookToUpdate = [...state.books]
            const indexToUpdate = currentBookToUpdate.findIndex(book => {
                return book._id === action.payload._id
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