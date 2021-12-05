import React from "react";
import * as styles from '../../styles/atoms/Media.module.scss';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


export default function Media() {
    const {gitHub, instagram, linkedIn, youTube} = useStaticQuery(graphql`
        query mediaGlyph {
            gitHub: file(relativePath: {eq: "media/github_glyph_light.png"}) {
                childImageSharp {
                    fixed(height: 32) {
                    ...GatsbyImageSharpFixed
                    }
                }
            },
            instagram: file(relativePath: {eq: "media/instagram_glyph_gradient.png"}) {
                childImageSharp {
                    fixed(height: 32) {
                    ...GatsbyImageSharpFixed
                    }
                }
            },
            linkedIn: file(relativePath: {eq: "media/linkedin_glyph.png"}) {
                childImageSharp {
                    fixed(height: 32) {
                    ...GatsbyImageSharpFixed
                    }
                }
            },
            youTube: file(relativePath: {eq: "media/youtube_glyph.png"}) {
                childImageSharp {
                    fixed(height: 32) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }`  
    )
    return (
    <div className={styles.container}>
        <Img fixed={gitHub.childImageSharp.fixed}/>
        <Img fixed={instagram.childImageSharp.fixed}/>
        <Img fixed={linkedIn.childImageSharp.fixed}/>
        <Img fixed={youTube.childImageSharp.fixed}/>
    </div>
    )
}