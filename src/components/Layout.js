import * as React from "react";
import Header from '../components/molecules/Header.js';
import Footer from '../components/molecules/Footer.js';

import "../styles/_global.scss";
import "../styles/_fonts.scss";

export default function Layout({ children }) {
    return (
        <div>
            <Header/>

            <div className="content">
                {children}
            </div>
            
            <Footer/>
        </div>
    )
}