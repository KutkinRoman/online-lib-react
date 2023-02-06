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

    const onClickFavorite = () => book.setIsFavourite(!book.isFavourite)

    return (
        <div className={'bookCardActions'}>
            <div className={'bookCardActionsItem'}>
                <AddShoppingCartIcon/>
            </div>
            <div className={'bookCardActionsItem'}>
                <ShoppingCartIcon/>
            </div>
            <div className={'bookCardActionsItem'} >
                {book.isFavourite
                    ? <FavoriteIcon onClick={onClickFavorite}/>
                    : <FavoriteBorderIcon  onClick={onClickFavorite}/>}
            </div>
        </div>
    );
};

export default observer(BookCardActions)