import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../context/useAppStore";

const ShoppingCartButton = () => {
    const navigate = useNavigate();
    const cart = useAppStore().shoppingCartStore;

    if (!cart) {
        return null;
    }

    return (
        <div className={'navBarUserMenuButtonIcon navBarUserMenuButtonIconShoppingCard'}
             onClick={() => navigate('shopping-cart')}>
            <div className={'navBarUserMenuShoppingCardMarker navBarUserMenuShoppingCardMarkerShow'} children={0}/>
        </div>
    );
};

export default ShoppingCartButton;