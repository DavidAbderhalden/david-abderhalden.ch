import * as React from "react";
import Header from '../components/molecules/Header.js';
import Footer from '../components/molecules/Footer.js';

import "../styles/_global.scss";
import "../styles/_fonts.scss";

export default function Layout({ children }) {
    return (
        <div>
            <div className="layout">
                <Header/>

                <div className="content">
                    {children}
                </div>
                
                <Footer/>
            </div>
            <p className="placeholder heading-1" style={{color: '#666666'}} >Mobile Styling in progress ... sorry</p>
        </div>

    )
}