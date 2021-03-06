import React from "react";
import ReactTypingEffect from "react-typing-effect";
import style from "./style.module.css";

export const ShortInfo = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <img
          src="./images/photoeditorsdk-export.jpeg"
          alt="It`s me!"
          className={style.userPhoto}
        />
        <h1>Serhii Khomyn</h1>
        <ReactTypingEffect
          text={["Hi it`s my portfolio", "I`m Front-End developer"]}
          cursorRenderer={(cursor) => <span>{cursor}</span>}
          speed={50}
          eraseSpeed={50}
          eraseDelay={2500}
          displayTextRenderer={(text, i) => {
            return <span>{text}</span>;
          }}
        />
      </div>
      <div className={style.socialMediaWrapper}>
        <a
          className={style.socialMedia}
          href="https://github.com/Serega346"
          target="_blank"
        >
          <img
            className={style.imgHover}
            src="./images/github.svg"
            alt="GitHub"
          />
        </a>
        <a
          className={style.socialMedia}
          href="https://www.instagram.com/serega356/"
          target="_blank"
        >
          <img
            className={style.imgHover}
            src="./images/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a
          className={style.socialMedia}
          href="https://www.linkedin.com/in/serhii-khomyn-80011a18a/"
          target="_blank"
        >
          <img
            className={style.imgHover}
            src="./images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
      </div>
      <a
        className={style.btn}
        href="https://drive.google.com/file/d/1b306K5aQZGut_RFWCU0JjcZVdhsQ31RP/view?usp=sharing"
        target="_blank"
      >
        Open CV
      </a>
    </div>
  );
};
