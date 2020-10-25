import React from "react";

import style from "./style.module.css";

export const Education = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className={style.title}>Education</h1>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
          <div className={style.eduBlock}>
            <span className={style.date}>2014 - 2018</span>
            <h3>Novorozdilskyy Polytechnic College</h3>
            <p>
              Field of study: Computer Engineering, Degree: Junior Specialist
            </p>
          </div>
          <div className={style.eduBlock}>
            <span className={style.date}>2018 - 2020</span>
            <h3>
              Ivano-Frankivsk National Technical University of Oil and Gas
            </h3>
            <p>
              Field of study: Computer Engineering, Degree: Bachelor's degree
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
          <div className={style.eduBlock}>
            <span className={style.date}>Apr. 2019 - Jul. 2019</span>
            <h3>IT Cluster Academy</h3>
            <p>
              In 2019, I completed the Front-End development course, where I
              learned HTML, CSS, JavaScript. At the end of the course was
              created a website for an English teacher.
            </p>
          </div>
          <div className={style.eduBlock}>
            <span className={style.date}>2019 - Present</span>
            <h3>Self study</h3>
            <p>
              I improve my skills in HTML, CSS, JavaScript and also learn new
              technology React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
