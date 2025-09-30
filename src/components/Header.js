import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow-sm">
            <div className="w-100">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse  w-100  justify-content-center gap-5" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0 ">

                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold text-white" to="/">
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"

                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink className="dropdown-item" to="/mens">
                          Mens
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/womens">
                          Womens
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/kids">
                          Kids Section
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/latest">
                          Latest
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold text-white" to="/about">
                      About Us
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex ms-lg-3 mt-2 mt-lg-0 ">
                  <input
                    className="form-control me-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success fw-bold text-white" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
