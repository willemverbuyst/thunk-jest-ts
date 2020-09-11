import React from 'react';

import { Navbar, Nav, Form, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">THUNK JEST TYPESCRIPT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-success">Login</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
