import {Image, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import './navbar.css';
import logo from './logo.png';

const NavbarWeb = () =>{
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><Image src={logo}></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavDropdown title="Control" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Medios">Medios</NavDropdown.Item>
                        <NavDropdown.Item href="/Calidad">Calidad</NavDropdown.Item>
                        <NavDropdown.Item href="/Asistencia">Asistencia</NavDropdown.Item>
                        <NavDropdown.Item href="/Ejercicio">Ejercicio</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Proveedores" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Consulta">Consulta / Modificacion</NavDropdown.Item>
                        <NavDropdown.Item href="/Altas">Altas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="bg-primary rounded" href="/Usuario">Inicio de Sesion</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarWeb;