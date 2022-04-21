import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import { Link, NavLink } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
const logo = require("../../imgs/logo-text.png");

export const Sidebar = () => {
  return (
    <div
      className="d-flex"
      style={{ height: "100vh", overflow: "scroll initial" }}
    ></div>
  );
};
