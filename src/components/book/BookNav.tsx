import React, {useEffect} from 'react';
import './styles.css';
import {InterfaceBookCategory} from "../../data/entities/BookCategory";
import BookNavItem from "./BookNavItem";
import {useAppStore} from "../../context/useAppStore";
import {observer} from "mobx-react-lite";
import {getBooksDemo} from "./BookCards";

const BookNav = () => {
    const bookStore = useAppStore().bookStore

    const onClickItemHandler = (category: InterfaceBookCategory) => {
        bookStore.setCurrentCategory(category)
        bookStore.setBooks(getBooksDemo())
    }

    useEffect(() => {
        const initCategories = async () => {
            await bookStore.initCategories()
            if (bookStore.categories.length > 0){
                bookStore.setCurrentCategory(bookStore.categories[0])
            }
            bookStore.setBooks(getBooksDemo())
        }
        initCategories()
    }, [])

    return (
        <div className={'bookNavWrapper'}>
            <div className={'bookNavContainer'}>
                <div className={'bookNavHeader'}>Категории</div>
                <div className={'bookNavItems'}>
                    {bookStore.categories.map(category => {
                        return (
                            <BookNavItem
                                key={category.id}
                                category={category}
                                currentCategory={bookStore.currentCategory}
                                onClick={() => onClickItemHandler(category)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default observer(BookNav);