import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Nav,
} from "reactstrap";
import logo from "../assets/tripitLogo.png";

const NavBar = (props) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("newName")) {
      setName(localStorage.getItem("newName"));
    }
  }, []);

  return (
    <div>
      <Navbar className= {!props.sessionToken ? "" : "navbarTripp"} 
      color="faded" light expand="md">
        <NavbarBrand href="/">
          {!props.sessionToken ? (
            ""
          ) : (
            <img src={logo} width="150px" height="50px" />
          )}
        </NavbarBrand>

        {!props.sessionToken ? (
          ""
        ) : (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <h4 className="welcomeTag">Welcome {name}!!</h4>
            </NavItem>
            <NavItem>
              <Button><a href="#viewTripSection">View Trips</a></Button>
            </NavItem>
            <NavItem>
              <Button
                onClick={props.clickLogout}
                color="info"
                className="btnLogout"
              >
                Logout
              </Button>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
