import React from 'react';
import './styles.css';
import BookNav from "./BookNav";
import BookCards from "./BookCards";

const LandingBooks = () => {
    return (
        <div id={'landingBooksWrapper'} className={'landingBooksWrapper'}>
            <BookNav/>
            <BookCards isShowAll/>
        </div>
    );
};

export default LandingBooks;