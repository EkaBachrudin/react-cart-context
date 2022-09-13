import React from 'react'
import {Button, Container, Nav, Navbar as Navbarbs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Navbarbs sticky="top" className="bg-white shadow-sm mb-3"> 
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button variant="outline-primary mt-2" style={{position: "relative"}}>
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                    </span>
                </Button>
            </Container>
        </Navbarbs>
    </div>
  )
}

export default Navbar