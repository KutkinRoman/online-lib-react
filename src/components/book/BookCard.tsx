import React from 'react';
import './styles.css';
import {InterfaceBook} from "../../data/entities/Book";
import {Grid, Rating} from "@mui/material";
import {getNoun} from "../../utils/NounUtils";
import BookCardActions from "./BookCardActions";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

interface BookCardProps {
    book: InterfaceBook;
}

const BookCard = ({book}: BookCardProps) => {
    const navigate = useNavigate()

    const generationPriceString = (value: number) => {
        const string =  parseFloat(value.toString())
            .toFixed(2)
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
        return string + ' KZT'
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={'bookCardContainer'}>
                <div className={'bookCardOnPressContainer'} onClick={() => navigate(`/book/${book.id}`)}/>
                <div className={'bookCardOnPressContainerRight'} onClick={() => navigate(`/book/${book.id}`)}/>
                <div className={'bookCardPriceContainer'}>
                    <div className={'bookCardPrice'}>
                        {generationPriceString(book.price)}
                    </div>
                </div>
                <BookCardActions book={book}/>
                <div className={'bookCardImageContainer'}>
                    <img className={'bookCardImage'} src={book.coverLink} alt={book.name}/>
                </div>
                <div className={'bookCardContentContainer'}>
                    <div className={'bookCardDescription bookCardContentItem'} children={book.description}/>
                    <div className={'bookCardAuthors bookCardContentItem'}>
                        {book.authors.map(author => author.fullName).join(' ')}
                    </div>
                    <div className={'bookCardRatingContainer bookCardContentItem'}>
                        <Rating name="read-only" value={book.rating} readOnly/>
                        <div className={'bookCardRatingCount'}>
                            {book.ratingCount} {getNoun(book.ratingCount, 'оценка', 'оценки', 'оценок')}
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default observer(BookCard);