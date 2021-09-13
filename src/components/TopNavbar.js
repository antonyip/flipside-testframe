import { Navbar, Nav, Container } from "react-bootstrap";
function TopNavBar(){
    return (
        <div>
        <Container>
        <Navbar fixed="top">
          <Container>
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/polygon">Polygon</Nav.Link>
                <Nav.Link href="/aave">Aave</Nav.Link>
                <Nav.Link href="/polygon-8">Polygon-8</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </Container>
        </div>
    );
}
export default TopNavBar;