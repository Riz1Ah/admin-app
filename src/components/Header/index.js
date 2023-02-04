import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Kommand Center</Navbar.Brand> */}
        <Link to='/' className='navbar-brand'>Kommand Center</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Login</Nav.Link> */}
            <li className='nav-item'>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/signup' className='nav-link'>Signup</NavLink>
            </li>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default Header;