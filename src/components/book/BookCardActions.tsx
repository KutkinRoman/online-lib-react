import {InterfaceBook} from "../../data/entities/Book";
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";
import DownloadIcon from '@mui/icons-material/Download';
import {useAppStore} from "../../context/useAppStore";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
interface BookCardActions {
    book: InterfaceBook;
}

const BookCardActions = ({book}: BookCardActions) => {
    const authStore = useAppStore().authStore;
    const navigate = useNavigate()
    const onClickFavorite = () => book.setIsFavourite(!book.isFavourite)
    const handleDownloadEBook = () => window.open(book.ebookLink)
    const handleEditBook = () => navigate(`book-edit/${book.id}`)

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
                    ? <FavoriteIcon onClick={onClickFavorite}/>
                    : <FavoriteBorderIcon onClick={onClickFavorite}/>}
            </div>
            <div className={'bookCardActionsItem'}>
                <DownloadIcon onClick={handleDownloadEBook}/>
            </div>
            {authStore.isAdmin() &&
                <div className={'bookCardActionsItem'}>
                    <EditIcon onClick={handleEditBook}/>
                </div>
            }
        </div>
    );
};

export default observer(BookCardActions)