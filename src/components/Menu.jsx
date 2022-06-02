import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/menu.css'

function Menu({credentials}) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>Red Restaurante</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto menu">
                            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>

                            {credentials.rol === "ANONYMOUS"
                            ? <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                            : <Nav.Link as={Link} to={"/logout"}>Logout</Nav.Link>
                            }
                            
                            {credentials.rol === "ANONYMOUS"
                            ? <Nav.Link as={Link} to={"/registro"}>Registro</Nav.Link>
                            : null
                            }
                            
                            {credentials.rol === "Admin"
                            ?<Nav.Link as={Link} to={"/admin"}>Admin</Nav.Link>
                            : null
                            }

                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand>{credentials.nombre}</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
