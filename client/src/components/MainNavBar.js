import React, { PureComponent } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import logo from "../images/djelloLogo.png";
import defaultUser from "../images/defaultUser.png";

class MainNavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <h1>
              <img src={logo} alt="logo" className="site-icon" />
              Djello!
            </h1>
          </NavbarBrand>
          <img src={defaultUser} alt="default user" className="profile-icon" />
          <h3>Welcome, (Username)!</h3>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Boards</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNavBar;
