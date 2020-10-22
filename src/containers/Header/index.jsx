import React from "react";

import {Parallax} from "../../components/Parallax";

import style from "./style.module.css"
import {ShortInfo} from "../../components/shortInfo"

export const Header = () => {
    return(
        <header className={style.header}>
            <Parallax />
            <ShortInfo/>
        </header>
    )
}