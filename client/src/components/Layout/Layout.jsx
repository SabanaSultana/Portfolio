import React from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import "./Layout.css";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <div className="header">
     <Menu/>
     <Home/>
    </div>
  );
};

export default Layout;
