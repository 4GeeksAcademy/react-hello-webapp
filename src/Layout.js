import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Star Warsss</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/personajes">
              <Nav.Link>Personajes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/planetas">
              <Nav.Link>Planetas</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/naves">
              <Nav.Link>Naves</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">{children}</Container>
    </>
  );
};

export default Layout;
