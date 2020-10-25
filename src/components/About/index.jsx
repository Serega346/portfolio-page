import React from "react";

import style from "./style.module.css";

export const About = () => {
  return (
    <div className="container mb-5">
      <h1 className="mb-5" id="About">
        About me
      </h1>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center d-flex align-items-center">
          <img
            src="./images/photoeditorsdk-export.jpeg"
            alt="It`s me!"
            className={`${style.userPhoto} img-fluid`}
          />
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mt-sm-4 mt-4">
          <div className={style.textContainer}>
            <p>
              Hello, my name is Serhii, I am 21 years old and I live in
              Ivano-Frankivs`k. In 2020, I graduated from Ivano-Frankivs`k
              National Technical University of Oil and Gas with a bachelor
              degree in Computer Engineering. Now I am actively looking for a
              job as a Front-End developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
