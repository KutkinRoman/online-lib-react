import React from 'react';
import BookForm from "../components/bookform/BookForm";
import './styles.css'
import {useParams} from 'react-router-dom';

const BookEditPage = () => {
    const {bookId} = useParams();

    return (
        <div className={'wrapper bookEditPageBackground'}>
            <div className={'container'}>
                <BookForm bookId={bookId}/>
            </div>
        </div>
    );
};

export default BookEditPage;