import React from 'react';
import './styles.css'
import {InterfaceBook} from "../../data/entities/Book";
import BookCard from "./BookCard";
import {Grid} from "@mui/material";
import BookCardsPagination from "./BookCardsPagination";
import {useAppStore} from "../../context/useAppStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import ShowMoreButton from "../button/ShowMoreButton";

export const getBooksDemo = () => {
    const booksDemo: InterfaceBook[] = []
    for (let i = 0; i < 3; i++) {
        booksDemo.push({
            id: Math.random().toString(),
            name: 'Психология денег',
            description: 'Психология денег: вечные уроки о богатстве, жадности и счастье',
            coverLink: 'https://m.media-amazon.com/images/I/51czv9wjmYL._AC_SY1000_.jpg',
            price: 1250.00
        })
        booksDemo.push({
            id: Math.random().toString(),
            name: 'Богатый папа',
            description: 'Богатый папа, бедный папа: Чему богатые учат своих детей о деньгах, чего нет у бедных и среднего класса!',
            coverLink: 'https://m.media-amazon.com/images/I/51czv9wjmYL._AC_SY1000_.jpg',
            price: 1120.00
        })
    }
    return booksDemo
}

interface BookCardsProps {
    isShowAll?: boolean
    isPagination?: boolean
}

const BookCards = ({isPagination, isShowAll}: BookCardsProps) => {
    const navigation = useNavigate()
    const navigationStore = useAppStore().navigationStore
    const bookStore = useAppStore().bookStore

    function onNextPageHandler() {
        bookStore.setBooks([...bookStore.books, ...getBooksDemo()])
        setTimeout(onScrollToPagination, 50)
    }

    const onShowAllHandler = () => {
        navigationStore.setCurrentItemId('books')
        navigation('/books')
    }

    const onScrollToPagination = () => {
        const element = document.getElementById('bookCardsPaginationContainer')
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
        }
    }

    return (
        <div className={'bookCardsContainer'}>
            <Grid container spacing={2} flex={1}>
                {bookStore.books.map(book => {
                    return (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    )
                })}
            </Grid>
            {isPagination && <BookCardsPagination onNext={onNextPageHandler}/>}
            {isShowAll && <ShowMoreButton onClick={onShowAllHandler}/>}
        </div>
    );
};

export default observer(BookCards);