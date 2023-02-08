import React, {UIEvent, useRef, useState} from 'react';
import './styles.css';
import NavBar from "../components/navbar/NavBar";
import LandingMain from "../components/landing/LandingMain";
import LandingBooks from "../components/book/LandingBooks";
import Footer from "../components/footer/Footer";
import LandingRule from "../components/rule/LandingRule";
import Review from "../components/review/Review";
import OrderFeedbackLanding from "../components/orderfeedback/OrderFeedbackLanding";
import ContactUsLanding from "../components/contactus/ContactUsLanding";
import BlogLanding from "../components/blog/BlogLanding";
import ServicesLanding from "../components/services/ServicesLanding";
import ProductsLanding from "../components/product/ProductsLanding";

const LandingPage = () => {

    const [isShowScrollNavBar, setIsShowScrollNavBar] = useState<boolean>(false)

    const scrollProps = useRef({
        top: 0,
        isAuto: false,
    })

    function onScrollHandler(event: UIEvent) {
        if (event.currentTarget.scrollTop < scrollProps.current.top && event.currentTarget.scrollTop > 150) {
            setIsShowScrollNavBar(true)
            // console.log('current.top: ', scrollProps.current.top, 'top: ', event.currentTarget.scrollTop, 'isAuto: ', scrollProps.current.isAuto)
        } else {
            setIsShowScrollNavBar(false)
        }
        scrollProps.current.top = event.currentTarget.scrollTop;
    }

    return (
        <div className={'wrapper landingPage'} onScroll={onScrollHandler}>
            <NavBar
                className={isShowScrollNavBar ? 'navScrollBar navScrollBarShow' : 'navScrollBar'}
                scrollProps={scrollProps}
            />
            <div className={'landingTop'}>
                <NavBar/>
                <LandingMain/>
            </div>
            <LandingBooks/>
            <Review/>
            <ServicesLanding/>
            <ProductsLanding/>
            <OrderFeedbackLanding/>
            <BlogLanding/>
            <ContactUsLanding/>
            <LandingRule/>
            <Footer/>
        </div>
    );
};


export default LandingPage;