import React from 'react';
import './styles.css'
import {useAppStore} from "../../context/useAppStore";
import {observer} from "mobx-react-lite";
import PaginationArrows from "../pagepagination/PaginationArrows";

const OrderFeedbackPagination = () => {
    const store = useAppStore().orderFeedbacksStore

    return (
        <PaginationArrows
            className={'orderFeedbackPaginationContainer'}
            isLoading={store.isLoading}
            onPrev={() => store.initPrevPage()}
            onNext={() => store.initNextPage()}
            isNextDisable={store.isLast}
            isPrevDisable={store.isFirst}
        />

    );
};

export default observer(OrderFeedbackPagination);