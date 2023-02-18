import React from 'react';
import BookForm from "../components/bookform/BookForm";
import './styles.css'
import {useParams} from 'react-router-dom';
import NavBar from "../components/navbar/NavBar";

const BookEditPage = () => {
    const {bookId} = useParams();

    return (
        <div className={'wrapper'}>
            <NavBar/>
            <div className={'commonPageBackground'}>
                <div className={'container'}>
                    <BookForm bookId={bookId}/>
                </div>
            </div>
        </div>
    );
};

export default BookEditPage;