import React from "react";
import { push as Menu } from "react-burger-menu";
import { scroller } from "react-scroll";

import style from "./style.module.css";

export const BurgerMenu = () => {
  const scrollToAbout = () => {
    scroller.scrollTo("About", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };
  const scrollToSkills = () => {
    scroller.scrollTo("Skills", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };
  const scrollToEducation = () => {
    scroller.scrollTo("Education", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };
  const scrollToRecentWork = () => {
    scroller.scrollTo("Recent", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <div className={style.btnGroup}>
        <button className={style.btn} onClick={scrollToAbout}>
          About Me
        </button>
        <button className={style.btn} onClick={scrollToSkills}>
          Skills
        </button>
        <button className={style.btn} onClick={scrollToEducation}>
          Education
        </button>
        <button className={style.btn} onClick={scrollToRecentWork}>
          Recent work
        </button>
      </div>
    </Menu>
  );
};
