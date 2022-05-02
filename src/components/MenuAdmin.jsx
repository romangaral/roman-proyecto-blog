import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

function MenuAdmin() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/usuariosAdmin"}>Usuarios</Nav.Link>
            <Nav.Link as={Link} to={"/entradasAdmin"}>Entradas</Nav.Link>
            <Nav.Link as={Link} to={"/comentariosAdmin"}>Comentarios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MenuAdmin;
