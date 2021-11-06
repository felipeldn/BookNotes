import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

import {updateBook} from '../actions/BookActions';
import {deleteBook} from '../actions/BookActions';

import {Form, Col, Button, Modal} from 'react-bootstrap';

import '../App.css';


function LogEntry({book}) {
    let dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const updateLog = () => {
        handleClose()
        dispatch(updateBook(
            {
                ...book,
                title: title,
                author: author,
                pages: pages,
                date_finished: date_finished,
                people: people,
                something_learned: something_learned,
                question: question
            }
        )) 
        // window.alert("Entry updated.")
    }

    const handleDelete = () => {
        let confirmation = window.confirm("Are you sure you want to delete this log entry?")
        if (confirmation === true) {
            console.log("delete book req ===> ", book)
            dispatch(deleteBook(book))
            // window.alert("Entry deleted.")
        }
    } 

    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [pages, setPages] = useState(book.pages)
    const [date_finished, setDate] = useState(book.date_finished)
    const [people, setPeople] = useState(book.people)
    const [something_learned, setSomething_Learned] = useState(book.something_learned)
    const [question, setQuestion] = useState(book.question)

    return(
        <div className='log-entry' key={book.id}>
            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Number of Pages:</b> {book.pages}</p>
            <p><b>Date Finished:</b> {book.date_finished}</p>
            <p><b>Historical figures:</b> {book.people}</p>
            <p><b>Something I Learned:</b> {book.something_learned}</p>
            <p><b>A Question about This Book:</b> {book.question}</p>
            <Button value={book} onClick={handleShow} variant="dark">EDIT</Button> | <Button variant="danger" onClick={handleDelete}>DELETE</Button>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Log Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="entry-form">
                    
                    <Form.Row>
                        <Col>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required type='text' value={title} onChange={e => setTitle(e.target.value)} name="title" />
                        </Col>
                        <Col>
                        <Form.Label>Author:</Form.Label>
                        <Form.Control required type='text' value={author} onChange={e => setAuthor(e.target.value)} name="author" />
                        </Col>
                        <Col>
                        <Form.Label>Number of Pages:</Form.Label>
                        <Form.Control required type='number' value={pages} onChange={e => setPages(e.target.value)} name="pages" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                        <Form.Label>Date Finished:</Form.Label>
                        <Form.Control required type='date' value={date_finished} onChange={e => setDate(e.target.value)} name="date_finished" />
                        </Col>

                    </Form.Row>
                    
                    <Form.Label>Historical Figures:</Form.Label>
                    <Form.Control required type='text' value={people} onChange={e => setPeople(e.target.value)} name="people" />
                    
                    <Form.Label>Something You Learned:</Form.Label>
                    <Form.Control required type='text' value={something_learned} onChange={e => setSomething_Learned(e.target.value)} name="something_learned" />
                    
                    <Form.Label>Any questions regarding this book?</Form.Label>
                    <Form.Control required type='text' value={question} onChange={e => setQuestion(e.target.value)} name="question" />
                    <br />
                    
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={updateLog} variant="success">Save Changes</Button> | <Button variant="secondary" onClick={handleClose}>Cancel</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default connect(null, {updateBook, deleteBook})(LogEntry);