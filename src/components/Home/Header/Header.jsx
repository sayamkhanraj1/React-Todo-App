import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import profile from "../../../imges/profile.png";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Header.css";
const Header = ({ user }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="header-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-head mb-3 mt-1"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Brand className="brand-text" href="#home">
            TASKS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* <i class="fa-solid fa-magnifying-glass input-icon"></i> */}
              <input placeholder="Search" className="nav-input" type="text" />
              {openModal && <Modal closeModal={setOpenModal} />}
              <button
                className="header-btn"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                {" "}
                + New task
              </button>
              {user.email ? (
                <Link to="/login">
                  <button className="header-btn">Login</button>
                </Link>
              ) : (
                  <button className="header-btn">Logout</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
