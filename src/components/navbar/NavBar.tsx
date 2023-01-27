import React, {MutableRefObject, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';
import {NavItem} from "./types";
import NavItemComponent from "./NavItemComponent";
import NavUserMenu from "./NavUserMenu";

const items: NavItem[] = [
    {
        id: 'main',
        name: 'Главная',
        scrollToElement: 'landingMainWrapper'
    },
    {
        id: 'books',
        name: 'Книги',
        scrollToElement: 'landingBooksWrapper'
    },
    {
        id: 'blogs',
        name: 'Блоги',
    },
    {
        id: 'about',
        name: 'О нас',
    },
    {
        id: 'contact_us',
        name: 'Связаться с нами',
    }
]

interface NavBarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    scrollProps?: MutableRefObject<{
        top: number,
        isAuto: boolean
    }>
}

const NavBar = ({className, scrollProps, ...props}: NavBarProps) => {

    const navigate = useNavigate();

    const [currentItemId, setCurrentItemId] = useState<string>('main')

    const onClickItemHandler = (item: NavItem) => {
        if (scrollProps?.current) {
            scrollProps.current.isAuto = true;
        }
        setCurrentItemId(item.id)
        if (item.scrollToElement) {
            const element = document.getElementById(item.scrollToElement)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
            }
        }
    }
    const renderItem = (item: NavItem) => {
        return (
            <NavItemComponent
                key={item.id}
                item={item}
                currentItemId={currentItemId}
                onClick={() => onClickItemHandler(item)}
            />
        )
    }

    return (
        <div className={['navBarWrapper', className].join(' ')} {...props}>
            <div className={'navBarLogoContainer'}>
                <div className={'navBarLogo'}/>
            </div>
            <div className={'navBarItemsContainer'}>
                {items.map(renderItem)}
            </div>
            <NavUserMenu/>
        </div>
    );
};

export default NavBar;