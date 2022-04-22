import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css"
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlinePoweroff } from "react-icons/ai";
export const Sidebar = () => {

  const logo = require("../../imgs/images.jpg")

  const [test, setTest] = useState<string>("");

  const activeItems = () => {
    let ulContainer = document.getElementById("ulCont");
    let listANav = ulContainer?.getElementsByClassName("invert-border-radius")
    if (listANav !== undefined) {
      for (let i = 0; i < listANav.length; i++) {
        listANav[i].addEventListener("click", () => {

          let current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          current[0].className += "active";
        })
      }
    }
  }

  console.log(test);

  return (
    <>
      <div className="bg-dark" style={{ height: "10vh", width: "100vw" }}>
        <a href="#" className="text-decoration-none text-white">
          {/* ELEMENTO CON FONDO NEGRO ARRIBA DE SIDEBAR */}
        </a>
      </div>
      <div
        className="d-flex justify-content-center bg-dark"
        style={{ height: "90vh", overflow: "scroll initial", width: "15rem" }}
      >
        <ul className="navbar-nav" id="ulCont"
          style={{ width: "100%" }}>
          {SidebarData.map((e, index) => {
            if (index === 0) {
              return (
                <li className="nav-item" key={index}>
                  <a href="#" id={e.title} className="mt-0 active d-flex text-decoration-none bg-white p-3 m-3 text-dark invert-border-radius" onClick={(e) => { setTest(e.currentTarget.id) }}>
                    <div style={{ marginRight: "1rem" }}>
                      {e.icon}
                    </div>
                    {e.title}
                  </a>
                </li>
              )
            }
            return (
              <li className="nav-item" key={index}>
                <a href="#" id={e.title} className="d-flex text-decoration-none bg-white p-3 m-3 text-dark invert-border-radius" onClick={(e) => {
                  setTest(e.currentTarget.id);
                  console.log(e.currentTarget.id)
                }}>
                  <div style={{ marginRight: "1rem" }}>
                    {e.icon}
                  </div>
                  {e.title}
                </a>
              </li>
            )
          })}
          <div className="nav-item mt-auto d-flex justify-content-center" >
            <a href="#" className="d-flex bg-white p-3 m-3 rounded-pill text-decoration-none">
              <AiOutlinePoweroff style={{ color: "black" }} />
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};
