import React from "react";
import { Link } from "gatsby";
import { container } from "styles/molecules/Header.module.scss";
import Banner from "components/atoms/Banner";
import Media from "components/atoms/Media";

export default function Header() {
    return (
        <div className={container}>
            <Link to="/">
                <Banner/>
            </Link>
            <Media/>
        </div>
    )
}