import React from 'react';
import './styles.css'
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import {CircularProgress} from "@mui/material";

interface BookCardsPaginationProps {
    onNext: () => void;
}

const BookCardsPagination = ({onNext}: BookCardsPaginationProps) => {
    const bookStore = useAppStore().bookStore

    return (
        <div id={'bookCardsPaginationContainer'} className={'bookCardsPaginationContainer'}>
            {(!bookStore.isLast && !bookStore.isLoading) &&
                <div className={'bookCardsPaginationButton'} onClick={onNext} children={'Показать еще'}/>
            }
            {bookStore.isLoading &&
                <CircularProgress/>
            }
        </div>
    );
};

export default observer(BookCardsPagination);