import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="#hp" className="mr-auto">
          HOME
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#aboutme" onClick={toggleNavbar}>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills" onClick={toggleNavbar}>
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" onClick={toggleNavbar}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" onClick={toggleNavbar}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
