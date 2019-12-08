import React, { useState, useContext } from "react";
import { AuthContext } from "../../firebase.config";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBFormInline
} from "mdbreact";
import { FirebaseAuthUtils } from "../../utils/auth.utils";
const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  let rigthNavbarItems = (
    <>
      <MDBNavItem>
        <MDBNavLink to={"#"} onClick={() => FirebaseAuthUtils.authLogout()}>
          Logout
        </MDBNavLink>
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
    <MDBNavbar color="rgba-black-strong" dark expand="md">
      <MDBContainer>
        <MDBNavbarToggler onClick={() => setOpen(!open)} />
        <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
          <MDBNavLink to="/">
            <strong className="white-text">Logitech Store</strong>
          </MDBNavLink>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            {rigthNavbarItems}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavbarComponent;
