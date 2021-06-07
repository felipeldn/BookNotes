import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBook} from '../actions/BookActions';

import {Form, Col, Button, Accordion, Card} from 'react-bootstrap';

import '../App.css'


class BookLogForm extends Component {     
    state = {
        title: '',
        author: '',
        pages: '',
        date_finished: '',
        people: '',
        period: '',
        something_learned: '',
        questions: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        window.alert("New entry added.")
        console.log('a')
        this.props.addBook(this.state)
        console.log('g')
        this.setState({
            title: '',
            author: '',
            pages: '',
            date_finished: '',
            people: '',
            period: '',
            something_learned: '',
            questions: ''
        })
    }

    render() {

        return (
            <Accordion>
                <Card>
                    <Card.Header style={{textAlign:'center'}}>
                        <Accordion.Toggle className='form-toggle' as={Button} variant="link" eventKey="0">
                            Create New Log Entry
                            <br/>
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form className="entry-form" onSubmit={this.handleSubmit}>
                                    <p>To close this form, click the "Create New Log Entry" button again.</p>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Title:</Form.Label>
                                            <Form.Control required type='text' value={this.state.title} onChange={this.handleChange} name="title"/>
                                        </Col>
                                        <Col>
                                            <Form.Label>Author:</Form.Label>
                                            <Form.Control required type='text' value={this.state.author} onChange={this.handleChange} name="author"/>
                                        </Col>
                                        <Col>
                                            <Form.Label>Number of Pages:</Form.Label>
                                            <Form.Control required type='number' value={this.state.pages} onChange={this.handleChange} name="pages"/>
                                        </Col>
                                    </Form.Row>

                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Date Finished:</Form.Label>
                                            <Form.Control required type='date' value={this.state.date_finished} onChange={this.handleChange} name="date_finished"/>
                                        </Col>
                                        <Col>
                                            <Form.Label>Period:</Form.Label>
                                            <Form.Control required type='text' value={this.state.period} onChange={this.handleChange} name="period"/>
                                        </Col>
                                    </Form.Row>

                                    <Form.Label>Were there any historical figures worthy of note in this book?</Form.Label>
                                    <Form.Control required type='text' value={this.state.people} onChange={this.handleChange} name="people"/>

                                    <Form.Label>Have you learned any particular lessons from reading this book?</Form.Label>
                                    <Form.Control required type='text' value={this.state.something_learned} onChange={this.handleChange} name="something_learned"/>

                                    <Form.Label>Do you have any questions regarding this book?</Form.Label>
                                    <Form.Control required type='text' value={this.state.question} onChange={this.handleChange} name="question"/>
                                    <br/>
                                    <Button variant="secondary" type="submit">Add Log Entry</Button>

                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default connect(null, {addBook})(BookLogForm);
