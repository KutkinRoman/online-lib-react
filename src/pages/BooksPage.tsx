import React from 'react';
import BookNav from "../components/book/BookNav";
import BookCards from "../components/book/BookCards";
import NavBar from "../components/navbar/NavBar";

const BooksPage = () => {
    return (
        <div className={'wrapper'}>
            <NavBar/>
            <div className={'booksPageContainer'}>
                <BookNav/>
                <BookCards isPagination/>
            </div>
        </div>
    );
};

export default BooksPage;