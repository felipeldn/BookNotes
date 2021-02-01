export const addBook = book => {
    return dispatch => {
        fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(book => dispatch({type: 'ADD_BOOK', payload: book}))
    }
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
        dispatch({type: "DELETE_BOOK_REQ"});
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log('res ===> ', res)
            dispatch({type: 'DELETE_BOOK_SUC', id: book.id});
        })        
        .catch(err => {
            dispatch({type: 'DELETE_BOOK_ERR', error: err});
            console.log('error ==> ', err)
        })
    }
}