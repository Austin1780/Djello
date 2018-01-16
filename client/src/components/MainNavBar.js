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
        <Navbar color="dark" className="navbar-dark">
          <NavbarBrand href="/">
            <h1>
              <img src={logo} alt="logo" className="site-icon" /> Djello!
            </h1>
          </NavbarBrand>
          <div>
            <h3>
              <img
                src={defaultUser}
                alt="default user"
                className="profile-icon"
              />{" "}
              Welcome, (Username)!
            </h3>
          </div>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar className="links">
            <Nav navbar>
              <NavItem>
                <NavLink href="" className="links">
                  Profile <i className="fa fa-id-card" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="links">
                  Boards <i className="fa fa-columns" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="links">
                  Settings <i className="fa fa-cog" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" className="links">
                  Logout <i className="fa fa-hand-peace" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNavBar;
