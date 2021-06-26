import React, {Component} from 'react';
import BookLogForm from './BookLogForm';
import LogEntry from './LogEntry';
import LogSearch from './LogSearch'
import {connect} from 'react-redux';
import {getBooks} from '../actions/BookActions'
import {deleteBook} from '../actions/BookActions'

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
            this.setState({input : event.target.value
        })
    }

   componentDidMount() {
        this.props.onGet();        
    } 

    render() {

        const filterBooks = (books, query) => {
            if (!query) {
                return books;
            }

            return books.filter((book) => {
                const bookName = book.title.toLowerCase();
                return bookName.includes(query)
            })
        }

        const filteredBooks = filterBooks(this.props.books, this.state.input)

        return (
        
                 <div>
                     <div className="log-search"> <LogSearch handleChange={this.handleChange}/>
                        {filteredBooks.map(book => (
                        <li key={book.id}>{book.title}</li>
                        ))}
                     </div>
                    <h1 className="log-head">Your Reading Log</h1>
                    <BookLogForm />
                    <hr />
                    <h2 className="log-head">Log Entries</h2>
                    <hr />
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
                                    <LogEntry
                                        key={book.id}
                                        book={book}
                                        // onDelete={this.props.onDelete}
                                    />
                                )
                            })
                        }
                    </div>
                    
                </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
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
