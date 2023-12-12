import React from "react";
import s from "./Menu.module.css";
import Toolbar from "./Toolbar/Toolbar";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Menu = () => {
  return (
    <div className={s.setka}>
      <Toolbar />
      <Header />
      <Content />
    </div>
  );
};

export default Menu;
