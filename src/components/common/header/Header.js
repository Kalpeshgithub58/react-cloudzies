import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderData } from "./header-static";
import "./Header.scss";

const Header = () => {
  const { headerTitle, headerList } = HeaderData;
  const [selected, setSelected] = useState("");

  const onNavClick = (name) => {
    setSelected(name);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          {headerTitle}
        </NavLink>
        <ul className="nav-menu">
          {headerList.map((menu, index) => {
            const actived = menu.name === selected ? "active" : null;
            return (
              <li className="nav-item" key={index} onClick={onNavClick}>
                <NavLink
                  to={`/${menu.value}`}
                  className={`nav-link ${actived}`}
                >
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
