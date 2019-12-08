import React, { useState, useContext } from "react";
import { AuthContext } from "../../configFirebase";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer
} from "mdbreact";
const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  let rigthNavbarItems = (
    <>
      <MDBNavItem>
        <MDBNavLink to="/logout">Logout</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Cart</MDBNavLink>
      </MDBNavItem>
    </>
  );

  if (!user) {
    rigthNavbarItems = (
      <>
        <MDBNavItem>
          <MDBNavLink to="/register">Sign in</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/login">Log in</MDBNavLink>
        </MDBNavItem>
      </>
    );
  }

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <strong className="white-text">Logitech Store</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setOpen(!open)} />
        <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>{rigthNavbarItems}</MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavbarComponent;
