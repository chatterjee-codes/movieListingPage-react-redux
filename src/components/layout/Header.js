import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt='' style={{ width: '120px' }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto' id='header'>
            <Nav.Link href='#'>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href='#!'>TV Shows</Nav.Link>
            <Nav.Link href='#!'>
              <Link to='/movies'>Movies</Link>
            </Nav.Link>
            <Nav.Link href='#!'>My List</Nav.Link>
          </Nav>
          <br />

          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='mr-2'
              aria-label='Search'
            />
          </Form>
          <Button className='btn-header'>Search</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
