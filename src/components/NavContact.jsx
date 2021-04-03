import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

const NavContact = () => {

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          HOME
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

  export default NavContact
