import React from 'react';
import BookForm from "../components/book/BookForm";

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