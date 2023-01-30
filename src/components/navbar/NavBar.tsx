import React, {MutableRefObject} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './styles.css';
import {NavItem} from "./types";
import NavItemComponent from "./NavItemComponent";
import NavUserMenu from "./NavUserMenu";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";

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
        scrollToElement: 'blogsLandingWrapper'
    },
    {
        id: 'about',
        name: 'О нас',
    },
    {
        id: 'contact_us',
        name: 'Связаться с нами',
        scrollToElement: 'contactUsLandingWrapper'
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
    const location = useLocation();
    const navStore = useAppStore().navigationStore

    const onClickItemHandler = (item: NavItem) => {
        navStore.setCurrentItemId(item.id)
        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => scrollToItem(item), 50)
            return;
        }
        scrollToItem(item);
    }

    const scrollToItem = (item: NavItem) => {
        if (item.scrollToElement) {
            const element = document.getElementById(item.scrollToElement)
            if (element) {
                element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
            }
        }
    }

    const renderItem = (item: NavItem) => {
        return (
            <NavItemComponent
                key={item.id}
                item={item}
                currentItemId={navStore.currentItemId}
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

export default observer(NavBar);