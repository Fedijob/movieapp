import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Navigation = ({ setText, setRating }) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>

            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
          <ReactStars
            count={5}
            size={24}
            edit={true}
            onChange={(newRating) => setRating(newRating)}
          />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search a Movie"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
