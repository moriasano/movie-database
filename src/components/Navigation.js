import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function Navigation({signOut, username}) {
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg='dark' variant='dark'>
                <Container>
                    {/* Float Left of Navbar */}
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            {/* <Nav.Link href='/other'>Other</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>

                    {/* Float Right of Navbar */}
                    <Navbar.Text className="justify-content-end">
                        <Navbar.Text>
                            <span>Hello, {username}</span>&nbsp;&nbsp;&nbsp;
                        </Navbar.Text>
                        <Button onClick={signOut} variant="outline-light">Log Out</Button>

                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;