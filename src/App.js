import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import picture1 from "./img/picture1.png";
import logo from "./img/logo.png";

function App() {
  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img class="d-block w-100" src={logo} alt="First slide" />
            </div>
            <div class="col-sm">
              <button type="button" class="btn btn-dark">
                Special Offer
              </button>
            </div>
            <div class="col-sm">30 % Off On Your</div>
            <div class="col-sm">icons</div>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Bootstrap Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Games</Nav.Link>
                    <Nav.Link href="/">Colections</Nav.Link>
                    <Nav.Link href="/">Box 360</Nav.Link>
                    <Nav.Link href="/">Frogger</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
            </Router>
          </div>
        </div>
      </section>

      <section>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={picture1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
