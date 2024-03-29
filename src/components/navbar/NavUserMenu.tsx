import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';
import ShoppingCartButton from "./ShoppingCartButton";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import MultiSearch from "../search";

const NavUserMenu = () => {
    const authStore = useAppStore().authStore
    const navigate = useNavigate();

    const onLogoutHandler = () => {
        authStore.logout();
        navigate('/')
    }

    return (
        <div className={'navBarUserMenuContainer'}>
            <div className={'navBarUserMenuButtonIcon'}>
                <MultiSearch/>
            </div>
            {authStore.isAuth()
                ? <React.Fragment>
                    {/*<NotificationButton/>*/}
                    <ShoppingCartButton/>
                    <div className={'navBarUserMenuButton'} children={'Выход'} onClick={onLogoutHandler}/>
                </React.Fragment>
                :
                <div className={'navBarUserMenuButton'} children={'Авторизация'} onClick={() => navigate('/login')}/>
            }
        </div>
    );
};

export default observer(NavUserMenu);