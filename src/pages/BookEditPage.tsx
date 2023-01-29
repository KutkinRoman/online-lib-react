import React from 'react';
import BookForm from "../components/bookform/BookForm";

const BookEditPage = () => {
    return (
        <div className={'wrapper bookEditPage'}>
            <div className={'container'}>
                <BookForm/>
            </div>
        </div>
    );
};

export default BookEditPage;