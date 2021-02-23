import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const ProfileIcon = ({ onRouteChange }) => {
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
        right
        className="b--transparent shadow-5"
        style={{ marginTop: "20px" }}
      >
        <DropdownItem onClick={toggle}>View profile</DropdownItem>
        <DropdownItem onClick={() => onRouteChange('signout')}>Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
};

export default ProfileIcon;
