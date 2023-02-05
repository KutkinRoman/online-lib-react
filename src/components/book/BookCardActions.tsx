import {InterfaceBook} from "../../data/entities/Book";
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";

interface BookCardActions {
    book: InterfaceBook;
}

const BookCardActions = ({book}: BookCardActions) => {
    return (
        <div className={'bookCardActions'}>
            <div className={'bookCardActionsItem'}>
                <AddShoppingCartIcon/>
            </div>
            <div className={'bookCardActionsItem'}>
                <ShoppingCartIcon/>
            </div>
            <div className={'bookCardActionsItem'}>
                {book.isFavourite
                    ? <FavoriteIcon/>
                    : <FavoriteBorderIcon/>}
            </div>
            {/*<div className={'bookCardActionsItem'}>*/}
            {/*    <FavoriteBorderIcon/>*/}
            {/*</div>*/}
            {/*<div className={'bookCardActionsItem'}>*/}
            {/*    <FavoriteIcon/>*/}
            {/*</div>*/}
        </div>
    );
};

export default observer(BookCardActions)