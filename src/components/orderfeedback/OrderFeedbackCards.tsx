import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import OrderFeedbackCard from "./OrderFeedbackCard";
import {Grid} from "@mui/material";
import './styles.css'

const OrderFeedbackCards = () => {
    const orderFeedbacksStore = useAppStore().orderFeedbacksStore

    useEffect(() => {
        orderFeedbacksStore.initStartPage()
    }, [])

    return (
        <div className={'orderFeedbackLandingCards'}>
            <Grid container spacing={2} flex={1}>
                {orderFeedbacksStore.content.map(item => {
                    return (
                        <OrderFeedbackCard
                            key={item.id}
                            feedback={item}
                        />
                    )
                })}
            </Grid>
        </div>
    );
};

export default observer(OrderFeedbackCards);