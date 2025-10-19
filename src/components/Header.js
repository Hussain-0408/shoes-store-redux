import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderCardButton from "../components/HeaderCardButton";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [search, setSearch] = useState("");
  const { items = [] } = useSelector((state) => state.cart ? state.cart : { items: [] });

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <nav className="navbar navbar-expand-lg  navbar-dark fixed-top  rounded shadow-sm" style={{ backgroundColor: "gray" }}>
            <div className="  align-items-center p-1   " style={{ width: "350px" }}>
              <h1 className="text-white fs-1 fw-bold">Shoes Store</h1>
            </div>
            <div className="w-100 ">
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

              <div className="collapse navbar-collapse   justify-content-arround p-1  w-100   gap-5" id="navbarSupportedContent">
                <ul className="navbar-nav     p-3 gap-4 mb-2 mb-lg-0 ">

                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold text-white" to="/">
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle "

                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </NavLink>
                    <ul className="dropdown-menu border" aria-labelledby="navbarDropdown">
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


                <form className="d-flex   p-3 gap-3 ms-lg-3 mt-2 mt-lg-0 " onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="form-control me-2 "
                    type="search"
                    placeholder="Search"
                    value={search}
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    style={{width:"500px"}}
                  />
                  {/* <button className="btn btn-outline-success fw-bold fs-5 text-white " style={{ width: "150px" }} >
                    Search
                  </button> */}
                </form>


                <HeaderCardButton />
              </div>

            </div>

          </nav>

        </Col>
      </Row>

      
    </Container>
  );
}

export default Header;
