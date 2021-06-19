import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {InputGroup, FormControl, Button, FormGroup, Spinner} from 'react-bootstrap';

const [search, setSearch] = useState('');

export const NavSection = () => (

    <Navbar expand='lg'>
        <Navbar.Brand className="text-light" href="/">BOOK NOTES</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <InputGroup size='1g' className='mb-3'>
                        <FormControl
                            placeholder="Enter a title, authorname, or keyword(s)"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <InputGroup.Append>
                            <Button color='secondary' onClick={handleSubmit}>
                                <i class="fas fa-binoculars"></i>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                <Nav.Item><Nav.Link className="text-light" href="/">HOME</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="text-light" href="/books">READING LOG</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link className="text-light" href="/search">BOOK SEARCH</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)