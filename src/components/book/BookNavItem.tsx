import React, {useMemo} from 'react';
import './styles.css';
import {InterfaceBookCategory} from "../../data/entities/BookCategory";

interface BookNavItemProps {
    category: InterfaceBookCategory;
    currentCategory: InterfaceBookCategory | null;

    onClick: () => void;
}

const BookNavItem = ({category, currentCategory, onClick}: BookNavItemProps) => {

    const isSelected = useMemo(() => {
        return currentCategory && currentCategory.id === category.id;
    }, [currentCategory])

    const markerClassName = useMemo(() => {
        return isSelected
            ? 'bookNavItemMarker bookNavItemMarkerShow'
            : 'bookNavItemMarker'
    }, [isSelected])


    return (
        <div className={'bookNavItem'} onClick={onClick}>
            <div className={markerClassName}/>
            <div>{category.name}</div>
        </div>
    );
};

export default BookNavItem;