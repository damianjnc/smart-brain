import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="pa4 tc">
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      style={{ cursor: "pointer" }}
    >
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="br-100 h3 w3 dib"
          alt="avatar"
        />
      </DropdownToggle>
      <DropdownMenu
        className="b--transparent shadow-5"
        style={{ marginTop: "20px" }}
      >
        <DropdownItem onClick={toggle}>View profile</DropdownItem>
        <DropdownItem onClick={toggle}>Signout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
};

export default ProfileIcon;
