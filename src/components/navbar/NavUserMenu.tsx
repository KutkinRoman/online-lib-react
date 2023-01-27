import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';
import NotificationButton from "./NotificationButton";
import ShoppingCartButton from "./ShoppingCartButton";

const NavUserMenu = () => {

    const navigate = useNavigate();

    return (
        <div className={'navBarUserMenuContainer'}>
            <div className={'navBarUserMenuButtonIcon navBarUserMenuButtonIconSearch'}/>
            <NotificationButton/>
            <ShoppingCartButton/>
            <div className={'navBarUserMenuButton'} children={'Авторизация'} onClick={() => navigate('/login')}/>
            {/*<div className={'navBarUserMenuButton'} children={'Выход'}/>*/}
        </div>
    );
};

export default NavUserMenu;