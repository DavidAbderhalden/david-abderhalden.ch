import React from "react";
import * as styles from '../../styles/atoms/Banner.module.scss';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Banner() {
    const logo = useStaticQuery(graphql`
        query logo {
            file(relativePath: {eq: "img/logo.png"}) {
                childImageSharp {
                    fixed(height: 56) {
                    ...GatsbyImageSharpFixed
                    }
                }
            },
        }`  
    )
    return (
        <div className={styles.container}>
            <div className={styles.container__text}>
                <h1 className="heading-1">David Abderhalden</h1>
                <p className="caption">NekroQuest</p>
            </div>
            <Img fixed={logo.file.childImageSharp.fixed}/>
        </div>
    )
}