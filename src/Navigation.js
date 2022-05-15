import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation({signOut, username}) {
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/other'>Other</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Text className="justify-content-end">
                        <Navbar.Text>
                            <span>Hello, {username}</span>
                        </Navbar.Text>
                        <Button variant="outline-success" onClick={signOut}>Log Out</Button>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;