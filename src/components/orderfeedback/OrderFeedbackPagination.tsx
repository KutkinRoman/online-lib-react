import {IconButton} from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './styles.css'
import {useAppStore} from "../../context/useAppStore";
import {observer} from "mobx-react-lite";

const OrderFeedbackPagination = () => {
    const store = useAppStore().orderFeedbacksStore

    return (
        <div className={'orderFeedbackPaginationContainer'}>
            <IconButton color="primary" aria-label="upload picture" component="label"
                        onClick={() => store.initPrevPage()}
                        disabled={store.isFirst}>
                <ChevronLeftIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="label"
                        onClick={() => store.initNextPage()}
                        disabled={store.isLast}>
                <ChevronRightIcon/>
            </IconButton>
        </div>
    );
};

export default observer(OrderFeedbackPagination);