import React, { ReactNode } from "react";
import { FaBars, FaHome, FaUserAlt } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
interface ISidebarDataItem {
  title: string;
  path: string;
  icon: ReactNode;
  iconClosed: ReactNode;
  iconOpened: ReactNode;
}

export const SidebarData: ISidebarDataItem[] = [
  {
    title: "Inicio",
    path: "/",
    icon: <FaHome style={{ height: "24px", width: "24px" }} />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
  },
  {
    title: "Mis Planes",
    path: "/misplanes",
    icon: <BiTask style={{ height: "24px", width: "24px" }} />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
  },
  {
    title: "Mis Planes",
    path: "/misplanes",
    icon: <FaUserAlt style={{ height: "24px", width: "24px" }} />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
  },
];
