import React from "react";
import { connect } from "react-redux";
import logo from '../../img/nav_logo.png'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Navbar2 = () => {
  return (
    <Navbar className="bg-nav" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#">
        <Image src={logo} id="nav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" active={true}>เกี่ยวกับเรา</Nav.Link>
          <Nav.Link href="#" active={true}>เมนูพันเล</Nav.Link>
          <Nav.Link href="#" active={true}>รับข่าวสารโปรโมชั่น</Nav.Link>
          <NavDropdown title="ติดต่อเรา" id="navbarDropdown" active={true}>
            <NavDropdown.Item href="#">ติดต่อสอบถาม</NavDropdown.Item>
            <NavDropdown.Item href="#">แนะนำติชมบริการ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">ร่วมงานกับเรา</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button id="nav-button" type="submit">
          <i className="fas fa-motorcycle" /> สั่งอาหาร
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbar2.propTypes = {
};

export default connect(
  null,
)(Navbar2);
