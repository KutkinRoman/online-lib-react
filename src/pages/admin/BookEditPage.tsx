import React from 'react';
import BookForm from "../../components/bookform/BookForm";
import '../styles.css'
import {useParams} from 'react-router-dom';
import AdminPanelPage from "./index";

const BookEditPage = () => {
    const {bookId} = useParams();

    return (
        <AdminPanelPage>
            <BookForm bookId={bookId}/>
        </AdminPanelPage>
    );
};

export default BookEditPage;