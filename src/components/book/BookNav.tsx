import React, {useEffect, useState} from 'react';
import './styles.css';
import {InterfaceBookCategory} from "../../data/entities/BookCategory";
import {BookCategoryService} from "../../data/services/BookCategoryService";
import BookNavItem from "./BookNavItem";

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

    const [currentCategory, setCurrentCategory] = useState<InterfaceBookCategory | null>(null)

    const [categories, setCategories] = useState<InterfaceBookCategory[]>([])

    const onClickItemHandler = (category: InterfaceBookCategory) => setCurrentCategory(category)

    useEffect(() => {

        const fetchCategories = async () => {
            const response = await BookCategoryService.getCategories();
            if (categoriesDemo.length > 0) {
                setCurrentCategory(categoriesDemo[0])
            }
            setCategories(categoriesDemo)

        }

        fetchCategories()
    }, [])

    return (
        <div className={'bookNavWrapper'}>
            <div className={'bookNavHeader'}>Категории</div>
            <div className={'bookNavItems'}>
                {categories.map(category => {
                    return (
                        <BookNavItem
                            key={category.id}
                            category={category}
                            currentCategory={currentCategory}
                            onClick={() => onClickItemHandler(category)}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default BookNav;