import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogoutAsyn } from '../redux/actions/actionLogin';

const NavBars = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
                <Image width="15%" src="https://res.cloudinary.com/danimel/image/upload/v1635784762/medical-symbol_z9wjaf.png" alt="" />
                 Agendar Citas de Nutrición
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link  to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/add" >Add</Link></Nav.Link>
           </Nav>
        </Container>
        <Nav>
             <Button variant="outline-primary" onClick={() => dispatch(actionLogoutAsyn())}>
                 <Image  width="25%" src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png" alt="" />
             </Button>
        </Nav>
        
      </Navbar>

    </div>
  );
};

export default NavBars;