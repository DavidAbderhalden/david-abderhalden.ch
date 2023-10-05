import * as React from "react";
import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';
import { content, container } from 'styles/Layout.module.scss';

import "styles/_global.scss";
import "styles/_fonts.scss";

export default function Layout({ children }: any) {
    return (
        <div>
            <div className={container}>
                <Header/>

                <div className={content}>
                    {children}
                </div>
                
                <Footer/>
            </div>
            <p className="placeholder heading-1" style={{color: '#666666'}} >Mobile Styling in progress ... sorry</p>
        </div>

    )
}