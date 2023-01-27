import React, {useMemo} from 'react';
import './styles.css';
import {InterfaceBook} from "../../data/entities/Book";

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
        <div className={'bookCard'}>
            <div className={'bookCardImage'} style={imageStyle}/>
            {/*<img className={'bookCardImage'} alt={book.name} src={book.coverLink}/>*/}
            <div className={'bookCardDescription'} children={book.description}/>
        </div>
    );
};

export default BookCard;