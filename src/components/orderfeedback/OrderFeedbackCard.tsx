import React from 'react';
import {InterfaceOrderFeedback} from "../../data/entities/OrderFeedback";
import {Avatar, Grid, Rating} from "@mui/material";
import './styles.css'

interface OrderFeedbackProps {
    feedback: InterfaceOrderFeedback
}

const OrderFeedbackCard = ({feedback}: OrderFeedbackProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={'orderFeedbackLandingCardContainer'}>
                <img className={'orderFeedbackLandingCardBookCover'} alt={feedback.orderBook.id}
                     src={feedback.orderBook.coverLink}/>

                <img className={'orderFeedbackLandingCardBookCover'} alt={feedback.orderBook.id}
                     src={feedback.orderBook.coverLink}/>

                <div className={'orderFeedbackLandingCardText'} children={feedback.text}/>
                <div className={'orderFeedbackLandingCardUserInfo'}>
                    <div className={'orderFeedbackLandingCardUserInfoAvatar'}>
                        <Avatar alt={feedback.orderOwner.fullName} src={feedback.orderOwner.avatarLink}/>
                    </div>
                    <div className={'orderFeedbackLandingCardUserInfoName'} children={feedback.orderOwner.fullName}/>
                    <div className={'orderFeedbackLandingCardRating'}>
                        <Rating name="read-only" value={feedback.rating} readOnly/>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default OrderFeedbackCard;
/*

id != '0028b6b-5e0d-464a-b1f1-9b3f62441dd7' AND
id != '438fb0c-da69-4afb-8cf8-37631272ebe1' AND

id != 'e6ac3a3-f3f0-4859-8b86-afebdb51eaa6' AND
id != 'c5788ae-0a44-4c20-b616-39a1ee1289a1' AND
id != 'fb310bd-b2ab-469c-9afc-e1ce6973e1cf' AND
id != '6405d04-21ff-4d79-8a5d-13a269f4260e'


*/
