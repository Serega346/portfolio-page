import React from "react";

import style from "./style.module.css";

export const Skills = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-5" id="Skills">
        Skills
      </h1>
      <div className="row">
        <div className={`col-12 ${style.imgContainer}`}>
          <figure className={style.elemContainer}>
            <figcaption>HTML</figcaption>
            <img
              className={style.imgTech}
              src="./images/html5.svg"
              alt="HTML"
            />
          </figure>
          <figure className={style.elemContainer}>
            <figcaption>CSS</figcaption>
            <img className={style.imgTech} src="./images/css.svg" alt="CSS" />
          </figure>
          <figure className={style.elemContainer}>
            <figcaption>JavaScript</figcaption>
            <img
              className={style.imgTech}
              src="./images/JavaScript.svg"
              alt="JavaScript"
            />
          </figure>
          <figure className={style.elemContainer}>
            <figcaption>React</figcaption>
            <img
              className={style.imgTech}
              src="./images/React.svg"
              alt="React"
            />
          </figure>
          <figure className={style.elemContainer}>
            <figcaption>Git</figcaption>
            <img className={style.imgTech} src="./images/git.svg" alt="Git" />
          </figure>
          <figure className={style.elemContainer}>
            <figcaption>Bootstrap</figcaption>
            <img
              className={style.imgTech}
              src="./images/Bootstrap.svg"
              alt="Bootstrap"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
