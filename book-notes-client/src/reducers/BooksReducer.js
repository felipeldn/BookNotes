export const BooksReducer = (state={books: []}, action) => {
    switch (action.type) {
            case 'GET_BOOKS':
            //return action.payload
                return {...state, books: action.payload}

            case 'ADD_BOOK':
                //return [...state, action.payload]
                return {...state, books: [...state.books, action.payload]}
            case 'UPDATE_BOOK':
                //filter out old entry, return new one
                //return [...state, action.payload]
                const updates = state.books.filter(book => book.id !== action.payload.id)
                return {...state, books: [...updates, action.payload]}
            case 'DELETE_BOOK_SUC':
                //const books = state.filter(book => book !== action.id) 
                //return books
                const keptBooks = state.books.filter(book => book.id !== action.id)
                return {
                    ...state,
                    books: keptBooks,
                    loading: false,
                }
            default: 
                return state

    }
}

