import React, { useContext, useState } from "react";
import { SidebarData } from "./SidebarData";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import UserContext from "../UserContext/UserContext";
import { Collapse, Fade } from "react-bootstrap";

export const Sidebar = () => {
  const user = useContext(UserContext);

  const navListStyle = ({ isActive }: any) => {
    return {
      transform: isActive ? "scale(1.1)" : "scale(1)",
      transition: isActive
        ? "width 4s ease-in-out 1s"
        : "width 4s ease-in-out 1s",
      width: isActive ? "15rem" : "",
      borderRadius: isActive ? "25px 25px 25px 25px" : "25px 25px 25px 0px",
    };
  };

  const [open, setOpen] = useState(true);

  return (
    <div className="d-flex">
      <Collapse in={open} dimension={"width"}>
        <div id="example-collapse-text">
          <nav className="d-flex justify-content-center bg-dark navvbar">
            <ul className="navbar-nav" id="ulCont">
              <div className="nav-item brand d-flex justify-content-center align-items-center">
                <h1 className="text-white">Logo</h1>
              </div>
              {SidebarData.map((e, index) => {
                return (
                  <li className="nav-item" key={e.title}>
                    <NavLink
                      style={navListStyle}
                      to={e.path}
                      id={e.title}
                      className="d-flex text-decoration-none bg-white p-3 m-3 text-dark"
                    >
                      <div className="divIcon">{e.icon}</div>
                      {e.title}
                    </NavLink>
                  </li>
                );
              })}
              <div className="nav-item mt-auto d-flex justify-content-center">
                <NavLink
                  to="/"
                  className="d-flex bg-white p-3 m-3 rounded-pill text-decoration-none"
                  onClick={() => {
                    user.logout();
                  }}
                >
                  <AiOutlinePoweroff className="iconOff" />
                </NavLink>
              </div>
            </ul>
          </nav>
        </div>
      </Collapse>

      <div className="bg-dark navrow d-flex align-items-center ">
        <a
          className="btn btn-primary p-3 m-3 toggle-button"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <FaBars />
        </a>
        <a className="text-decoration-none text-white">{user.username}</a>
      </div>
    </div>
  );
};
