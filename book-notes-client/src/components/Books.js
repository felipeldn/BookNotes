import React, {Component} from 'react';
import BookLogForm from './BookLogForm';
import LogEntry from './LogEntry';
import {connect} from 'react-redux'
import {getBooks} from '../actions/BookActions'
import {deleteBook} from '../actions/BookActions'

class Books extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onGet();
    }

    render() {
        return (
            <div>
                <h1 className="log-head">Your Reading Log</h1>
                <BookLogForm />
                <hr/>
                <h2 className="log-head">Log Entries</h2>
                <hr/>
                <div className="list">
                    {
                        this.props.books.sort(function(a, b) {
                            let bookA = a.title.toUpperCase();
                            let bookB = b.title.toUpperCase();
                            if (bookA < bookB) {
                                return -1;
                            }
                            if (bookA > bookB) {
                                return 1;
                            }
                            return 0;
                        }).map(book => {
                            return (
                                <logEntry
                                    key={book.id}
                                    book={book}
                                    onDelete={this.props.onDelete}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            dispatch(getBooks());
        },
        onDelete: (id) => {
            dispatch(deleteBook(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);