import React from "react";

import style from "./style.module.css"


export const About = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                    <h1 className="mb-5">About me</h1>
                    <img src="./images/photoeditorsdk-export.jpeg" alt="It`s me!" className={style.userPhoto}/>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}