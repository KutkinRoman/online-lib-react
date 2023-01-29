import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';
import NotificationButton from "./NotificationButton";
import ShoppingCartButton from "./ShoppingCartButton";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";

const NavUserMenu = () => {
    const authStore = useAppStore().authStore
    const navigate = useNavigate();

    return (
        <div className={'navBarUserMenuContainer'}>
            <div className={'navBarUserMenuButtonIcon navBarUserMenuButtonIconSearch'}/>
            {authStore.isAuth()
                ? <React.Fragment>
                    <NotificationButton/>
                    <ShoppingCartButton/>
                    <div className={'navBarUserMenuButton'} children={'Выход'} onClick={() => authStore.logout()}/>
                </React.Fragment>
                :
                <div className={'navBarUserMenuButton'} children={'Авторизация'} onClick={() => navigate('/login')}/>
            }
        </div>
    );
};

export default observer(NavUserMenu);