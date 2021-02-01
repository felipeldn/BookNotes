import React from 'react';
import {Jumbotron as Banner, Row, Col} from 'react-bootstrap';
import '../App.css'

import bannerImage from './historianNotesSF.png';
export const Jumbotron = () => (

    <Banner fluid>
        <Row>
            <Col>
                <div className='banner-text'>
                    <h1>Book Notes</h1>
                    <h4>Explore the exciting world of reading, search for books, and save all your important notes in one place</h4>
                </div>
            </Col>

            <Col>
                <img src={bannerImage} alt="explorer image" width="50%" height="70%" />
            </Col>
        </Row>
    </Banner>

)