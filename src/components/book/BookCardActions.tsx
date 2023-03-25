import {InterfaceBook} from "../../data/entities/Book";
import React, {useEffect, useState} from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";
import {BookService} from "../../data/services/BookService";
import {BookStatusEnum} from "../../data/entities/BookStatusEnum";
import {ShoppingCartService} from "../../data/services/ShoppingCartService";
import {Tooltip} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

interface BookCardActions {
    book: InterfaceBook;
}

const BookCardActions = ({book}: BookCardActions) => {
    const appStore = useAppStore();
    const authStore = useAppStore().authStore;
    const navigate = useNavigate()
    const [isFavourite, setIsFavourite] = useState<boolean | null>(null)
    const [bookStatus, setBookStatus] = useState<BookStatusEnum | null>(null)

    const handleDownloadEBook = () => window.open(book.ebookLink)
    const handleEditBook = () => navigate(`/admin-panel/book-edit/${book.id}`)

    const fetchIsFavourite = async () => {
        const response = await BookService.isFavourite(book.id);
        setIsFavourite(response.data)
    }

    const addFavourite = async () => {
        setIsFavourite(true)
        await BookService.addFavourite(book.id);
    }

    const removeFavourite = async () => {
        setIsFavourite(false)
        await BookService.removeFavourite(book.id);
    }

    const fetchBookStatus = async () => {
        const response = await ShoppingCartService.getBookStatus(book.id)
        setBookStatus(response.data)
    }

    const addBook = async () => {
        setBookStatus(BookStatusEnum.IN_CART)
        const response = await ShoppingCartService.addBook(book.id);
        appStore.setShoppingCartStore(response.data)
    }

    const removeBook = async () => {
        setBookStatus(BookStatusEnum.NOT_IN_CART)
        const response = await ShoppingCartService.removeBook(book.id);
        appStore.setShoppingCartStore(response.data)
    }

    const readBook = async () => {
        navigate(`/ebook-read/${book.id}`)
    }

    useEffect(() => {
        if (authStore.isUser()) {
            fetchBookStatus()
            fetchIsFavourite()
        }
    }, [book, authStore.isUser()])

    return (
        <div className={'bookCardActions'}>
            {authStore.isUser() &&
                <React.Fragment>
                    {(bookStatus !== null) &&
                        <React.Fragment>
                            {bookStatus === BookStatusEnum.NOT_IN_CART &&
                                <div className={'bookCardActionsItem'}>
                                    <Tooltip title={'Добавить в корзину'}>
                                        <AddShoppingCartIcon onClick={addBook}/>
                                    </Tooltip>
                                </div>
                            }
                            {bookStatus === BookStatusEnum.IN_CART &&
                                <div className={'bookCardActionsItem'}>
                                    <Tooltip title={'Удалить из корзины'}>
                                        <ShoppingCartIcon onClick={removeBook}/>
                                    </Tooltip>
                                </div>
                            }
                            {bookStatus === BookStatusEnum.PURCHASED &&
                                <div className={'bookCardActionsItem'}>
                                    <Tooltip title={'Читать'}>
                                        <AutoStoriesIcon onClick={readBook}/>
                                    </Tooltip>
                                </div>
                            }
                        </React.Fragment>
                    }
                    {(isFavourite !== null) &&
                        <div className={'bookCardActionsItem'}>
                            {isFavourite
                                ?
                                <Tooltip title={'Удалить из избранного'}>
                                    <FavoriteIcon onClick={removeFavourite}/>
                                </Tooltip>
                                :
                                <Tooltip title={'Добавить в избранное'}>
                                    <FavoriteBorderIcon onClick={addFavourite}/>
                                </Tooltip>
                            }
                        </div>
                    }
                </React.Fragment>
            }
            {authStore.isAdmin() &&
                <div className={'bookCardActionsItem'}>
                    <Tooltip title={'Редактировать'}>
                        <EditIcon onClick={handleEditBook}/>
                    </Tooltip>
                </div>
            }
        </div>
    );
};

export default observer(BookCardActions)