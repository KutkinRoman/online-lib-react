import React from 'react';
import {useNavigate} from "react-router-dom";

const ShoppingCartButton = () => {
    const navigate = useNavigate();

    return (
        <div className={'navBarUserMenuButtonIcon navBarUserMenuButtonIconShoppingCard'}
             onClick={() => navigate('shopping-cart')}>
            <div className={'navBarUserMenuShoppingCardMarker navBarUserMenuShoppingCardMarkerShow'} children={35}/>
        </div>
    );
};

export default ShoppingCartButton;