export const addBook = book => {
    // console.log('b')
    return dispatch => {
        // console.log('c')
        fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(book => {
            // console.log('d')
            return dispatch({type: 'ADD_BOOK', payload: book})
        })
        // console.log('e')
    }
    console.log('f')
}

export const getBooks = () => {
    return dispatch => {
        fetch(`http://localhost:3000/books`)
        .then(resp => resp.json())
        .then(books => dispatch({type: 'GET_BOOKS', payload: books}))
    }
}

export const updateBook = book => {
    return dispatch => {
        console.log("update book ==> ", book)
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PATCH',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => {
            dispatch({type: 'UPDATE_BOOK', payload: book})
        })
        .catch(err => {
            console.log("error ==> ", err);
        })
    }
}

export const deleteBook = book => {
    console.log("================> ", book)
    return dispatch => {
        dispatch({type: "DELETE_BOOK"});
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })    
    }
}