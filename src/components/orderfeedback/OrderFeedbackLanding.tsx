import React from 'react';
import OrderFeedbackCards from "./OrderFeedbackCards";
import './styles.css'
import OrderFeedbackPagination from "./OrderFeedbackPagination";

const OrderFeedbackLanding = () => {
    return (
        <div className={'container orderFeedbackLandingWrapper'}>
            <OrderFeedbackPagination/>
            <div className={'orderFeedbackLandingHeader'}>
                <div className={'orderFeedbackLandingDescription'} children={'Отзывы'}/>
                <div className={'orderFeedbackLandingTitle'} children={'Последние обзоры книг'}/>
            </div>
            <OrderFeedbackCards/>
        </div>
    );
};

export default OrderFeedbackLanding;