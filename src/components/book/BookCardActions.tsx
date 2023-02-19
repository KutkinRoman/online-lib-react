import {InterfaceBook} from "../../data/entities/Book";
import React, {useEffect, useState} from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {observer} from "mobx-react-lite";
import DownloadIcon from '@mui/icons-material/Download';
import {useAppStore} from "../../context/useAppStore";
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";
import {BookService} from "../../data/services/BookService";
import {BookStatusEnum} from "../../data/entities/BookStatusEnum";
import {ShoppingCartService} from "../../data/services/ShoppingCartService";

interface BookCardActions {
    book: InterfaceBook;
}

const BookCardActions = ({book}: BookCardActions) => {
    const authStore = useAppStore().authStore;
    const navigate = useNavigate()
    const [isFavourite, setIsFavourite] = useState<boolean | null>(null)
    const [bookStatus, setBookStatus] = useState<BookStatusEnum | null>(null)

    const handleDownloadEBook = () => window.open(book.ebookLink)
    const handleEditBook = () => navigate(`book-edit/${book.id}`)

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
        await ShoppingCartService.addBook(book.id);
    }

    const removeBook = async () => {
        setBookStatus(BookStatusEnum.NOT_IN_CART)
        await ShoppingCartService.removeBook(book.id);
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
                        <div className={'bookCardActionsItem'}>
                            {bookStatus === BookStatusEnum.NOT_IN_CART &&
                                <AddShoppingCartIcon onClick={addBook}/>
                            }
                            {bookStatus === BookStatusEnum.IN_CART &&
                                <ShoppingCartIcon onClick={removeBook}/>
                            }
                            {bookStatus === BookStatusEnum.PURCHASED &&
                                <DownloadIcon onClick={handleDownloadEBook}/>
                            }
                        </div>
                    }
                    {(isFavourite !== null) &&
                        <div className={'bookCardActionsItem'}>
                            {isFavourite
                                ? <FavoriteIcon onClick={removeFavourite}/>
                                : <FavoriteBorderIcon onClick={addFavourite}/>}
                        </div>
                    }
                </React.Fragment>
            }
            {authStore.isAdmin() &&
                <div className={'bookCardActionsItem'}>
                    <EditIcon onClick={handleEditBook}/>
                </div>
            }
        </div>
    );
};

export default observer(BookCardActions)