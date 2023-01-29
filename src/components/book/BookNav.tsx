import React, {useEffect} from 'react';
import './styles.css';
import {InterfaceBookCategory} from "../../data/entities/BookCategory";
import {BookCategoryService} from "../../data/services/BookCategoryService";
import BookNavItem from "./BookNavItem";
import {useAppStore} from "../../context/useAppStore";
import {observer} from "mobx-react-lite";
import {getBooksDemo} from "./BookCards";

const categoriesDemo: InterfaceBookCategory[] = [
    {
        id: '1',
        name: 'Приключения'
    },
    {
        id: '2',
        name: 'Лучшее'
    },
    {
        id: '3',
        name: 'Классика'
    },
    {
        id: '4',
        name: 'Философия'
    },
    {
        id: '5',
        name: 'Путешествия'
    },
    {
        id: '6',
        name: 'История'
    }
]
const BookNav = () => {
    const bookStore = useAppStore().bookStore

    const onClickItemHandler = (category: InterfaceBookCategory) => {
        bookStore.setCurrentCategory(category)
        bookStore.setBooks(getBooksDemo())
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await BookCategoryService.getCategories();
            if (categoriesDemo.length > 0) {
                bookStore.setCurrentCategory(categoriesDemo[0])
            }
            bookStore.setCategories(categoriesDemo)
            bookStore.setBooks(getBooksDemo())
        }

        fetchCategories()
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