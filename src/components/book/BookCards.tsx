import React, {useState} from 'react';
import './styles.css'
import {InterfaceBook} from "../../data/entities/Book";
import BookCard from "./BookCard";

const getBooksDemo = () => {
    const booksDemo: InterfaceBook[] = []
    for (let i = 0; i < 3; i++) {
        booksDemo.push({
            id: '1' + i,
            name: 'Психология денег',
            description: 'Психология денег: вечные уроки о богатстве, жадности и счастье',
            coverLink: 'https://ltdfoto.ru/images/2023/01/28/psychologyOfMoney.png',
            price: 1250.00
        })
        booksDemo.push({
            id: '2' + i,
            name: 'Богатый папа',
            description: 'Богатый папа, бедный папа: Чему богатые учат своих детей о деньгах, чего нет у бедных и среднего класса!',
            coverLink: 'https://ltdfoto.ru/images/2023/01/28/RichPoorDad.png',
            price: 1120.00
        })
    }
    return booksDemo
}

const BookCards = () => {

    const [books, setBooks] = useState<InterfaceBook[]>(getBooksDemo())

    return (
        <div className={'bookCards'}>
            {books.map(book => {
                return (
                    <BookCard
                        key={book.id}
                        book={book}
                    />
                )
            })}
        </div>
    );
};

export default BookCards;