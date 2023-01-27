import React from 'react';
import './styles.css';
import NavBar from "../components/navbar/NavBar";
import LandingMain from "../components/landing/LandingMain";
import LandingBooks from "../components/book/LandingBooks";
import Footer from "../components/fotter/Footer";
import LandingRule from "../components/rule/LandingRule";

const LandingPage = () => {
    return (
        <div className={'wrapper landingPage'}>
            <div className={'landingTop'}>
                <NavBar/>
                <LandingMain/>
            </div>
            <LandingBooks/>
            <LandingRule/>
            <Footer/>
        </div>
    );
};


export default LandingPage;