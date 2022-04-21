import React, { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

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
