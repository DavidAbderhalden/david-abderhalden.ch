import * as React from "react";
import Header from '../components/molecules/Header.js'
import Footer from '../components/molecules/Footer.js'
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>David-Abderhalden</title>
            </Helmet>

            <Header/>

            <div className="content">
                {children}
            </div>
            
            <Footer/>
        </div>
    )
}