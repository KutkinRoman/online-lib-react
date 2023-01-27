import React from 'react';
import './styles.css';
import NavBar from "../components/navbar/NavBar";
import LandingMain from "../components/landing/LandingMain";
import LandingBooks from "../components/book/LandingBooks";

const LandingPage = () => {
    return (
        <div className={'wrapper landingPage'}>
            <div className={'landingTop'}>
                <NavBar/>
                <LandingMain/>
                <LandingBooks/>
            </div>
        </div>
    );
};


export default LandingPage;