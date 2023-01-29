import React from 'react';
import './styles.css'

interface BookCardsPaginationProps {
    onNext: () => void;
}

const BookCardsPagination = ({onNext}: BookCardsPaginationProps) => {
    return (
        <div id={'bookCardsPaginationContainer'} className={'bookCardsPaginationContainer'}>
            <div className={'bookCardsPaginationButton'} onClick={onNext} children={'Показать еще'}/>
        </div>
    );
};

export default BookCardsPagination;