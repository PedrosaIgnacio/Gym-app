import React, { ReactNode, useContext } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import UserContext from "../UserContext/UserContext";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="w-100 d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Sidebar />
      {children}
    </main>
  );
};
