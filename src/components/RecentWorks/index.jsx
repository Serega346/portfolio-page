import React from "react";

import style from "./style.module.css";

export const RecentWorks = () => {
  return (
    <div className="container mt-5">
      <h1 className={style.title}>Recent works</h1>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <a href="https://english-language-courses.web.app/" target="_blank">
            <figure className={style.imgContainer}>
              <img
                className={style.imgWorks}
                src="./images/elc.png"
                alt="English Language Courses"
              />
              <figcaption className={style.imgCaption}>
                <p>English Language Courses</p>
                <span className={style.date}>2019</span>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <a href="https://mars-rover-photos-1.web.app/" target="_blank">
            <figure className={style.imgContainer}>
              <img
                className={style.imgWorks}
                src="./images/mars.png"
                alt="Mars Explorer"
              />
              <figcaption className={style.imgCaption}>
                <p>Mars Explorer</p>
                <span className={style.date}>2020</span>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <a href="https://clothes-diploma.herokuapp.com/" target="_blank">
            <figure className={style.imgContainer}>
              <img
                className={style.imgWorks}
                src="./images/clothes.png"
                alt="CLOTHES"
              />
              <figcaption className={style.imgCaption}>
                <p>Online Clothes Store</p>
                <span className={style.date}>2020</span>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};
