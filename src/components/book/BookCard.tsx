import React, {useMemo} from 'react';
import './styles.css';
import {InterfaceBook} from "../../data/entities/Book";
import {Grid} from "@mui/material";

interface BookCardProps {
    book: InterfaceBook;
}

const BookCard = ({book}: BookCardProps) => {

    const imageStyle = useMemo(() => {
        return {
            background: "url(\"" + book.coverLink + "\") no-repeat center"
        }
    }, [book.coverLink])

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={'bookCardContainer'}>
                <div className={'bookCardImage'} style={imageStyle}/>
                {/*<img className={'bookCardImage'} alt={book.name} src={book.coverLink}/>*/}
                <div className={'bookCardDescription'} children={book.description}/>
            </div>
        </Grid>
    );
};

export default BookCard;