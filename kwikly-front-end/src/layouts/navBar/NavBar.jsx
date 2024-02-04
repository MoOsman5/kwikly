import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";
import shopping_cart from "../../assets/images/shopping-cart.png";
import user from "../../assets/images/user.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="px-2 bg-dark bg-gradient">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} className="w-25 mx-4" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-100 flex-row form-container">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-center seach-bar "
              aria-label="Search"
            />
          <Nav className="d-flex flex-row ">
            <Nav.Link className="icon" href="#shopping_cart">
              <img
                src={shopping_cart}
                alt="shopping cart"
                className="w-100 h-100"
              />
            </Nav.Link>
            <Nav.Link className="icon" href="#user">
              <img
                src={user}
                alt="user"
                className="w-100 h-100"
              />
            </Nav.Link>
          </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
