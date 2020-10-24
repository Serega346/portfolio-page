import React from "react";

import style from "./style.module.css"

export const Index = () => {

    return(
        <div className="container">
            <h1>Skills</h1>
            <div className="row">
                <div className="col-12">
                    <img className={style.imgTech} src="./images/html5.svg" alt="HTML"/>
                    <img className={style.imgTech} src="./images/css.svg" alt="CSS"/>
                    <img className={style.imgTech} src="./images/JavaScript.svg" alt="JavaScript"/>
                    <img className={style.imgTech} src="./images/React.svg" alt="React"/>
                    <img className={style.imgTech} src="./images/git.svg" alt="Git"/>
                    <img className={style.imgTech} src="./images/Bootstrap.svg" alt="Bootstrap"/>
                </div>
            </div>
        </div>
    )

}