import React from 'react';
import {InterfaceBook} from "../../data/entities/Book";
import {Rating, Stack, Typography} from "@mui/material";
import BookCardActions from "./BookCardActions";

interface BookViewProps {
    book: InterfaceBook
}

const BookView = (props: BookViewProps) => {
    const {book} = props;

    const generationPriceString = (value: number) => {
        const string = parseFloat(value.toString())
            .toFixed(2)
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
        return string + ' KZT'
    }

    return (
        <div className={'bookViewWrapper'}>
            <div className={'bookViewContainer'}>
                <div className={'bookViewImageContainer'}>
                    <img className={'bookViewImage'} src={book.coverLink} alt={book.name}/>
                </div>
                <div className={'bookViewContent'}>
                    <BookCardActions book={book}/>
                    <Stack spacing={2}>
                        <Typography variant={'h6'}>
                            {generationPriceString(book.price)}
                        </Typography>
                        <Typography variant={'h5'}>
                            {book.name}
                        </Typography>
                        <Typography variant={'subtitle2'}>
                            {book.authors.map(a => a.fullName).join(', ')}
                        </Typography>
                        <Typography variant={'body1'}>
                            {book.description}
                        </Typography>
                        <Stack flexDirection={'row'} spacing={1}>
                            <Rating name="read-only" value={book.rating} readOnly/>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default BookView;