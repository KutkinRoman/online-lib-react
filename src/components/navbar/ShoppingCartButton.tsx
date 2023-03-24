import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../context/useAppStore";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge, Tooltip} from "@mui/material";
import {observer} from "mobx-react-lite";

const ShoppingCartButton = () => {
    const navigate = useNavigate();
    const cart = useAppStore().shoppingCartStore;

    return (
        <div className={'navBarUserMenuButtonIcon'}>
            <Tooltip title={'Корзина'}>
                <Badge badgeContent={cart && cart.totalOrders} color="primary">
                    <ShoppingCartIcon
                        fontSize={'large'}
                        style={{color: '#fff'}}
                        onClick={() => navigate('/shopping-cart')}
                    />
                </Badge>
            </Tooltip>
        </div>
    );
};

export default observer(ShoppingCartButton);