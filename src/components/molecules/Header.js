import React from "react"
import * as styles from '../../styles/molecules/Header.module.scss'
import Banner from "../atoms/Banner.js";
import Media from "../atoms/Media.js";

export default function Header() {
    return (
        <div className={styles.container}>
            <Banner/>
            <Media/>
        </div>
    )
}