import React, {useEffect, useState} from 'react';
import NavBar from "../components/navbar/NavBar";
import {useParams} from "react-router-dom";
import {InterfaceBook} from "../data/entities/Book";
import {BookService} from "../data/services/BookService";
import {Alert, LinearProgress, Rating, Stack, Typography} from "@mui/material";
import BookView from "../components/book/BookView";
import {InterfaceOrderFeedback} from "../data/entities/OrderFeedback";
import {OrderFeedbackService} from "../data/services/OrderFeedbackService";

const BookPage = () => {
    const {bookId} = useParams()

    const [isLoadingBook, setIsLoadinBook] = useState(true)
    const [book, setBook] = useState<InterfaceBook | null>(null)
    const [orderFeedbacks, setOrderFeedback] = useState<InterfaceOrderFeedback[]>([])

    useEffect(() => {
        const initBook = async () => {
            try {
                if (bookId) {
                    const book = await BookService.getBookById(bookId);
                    setBook(book.data)
                    const orderFeedbacks = await OrderFeedbackService.getAll({bookId});
                    setOrderFeedback(orderFeedbacks.data)
                    console.log('setOrderFeedback')
                }
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoadinBook(false)
            }
        }
        initBook()
    }, [])

    return (
        <div className={'wrapper'}>
            <NavBar/>
            <div className={'container'}>
                {isLoadingBook &&
                    <LinearProgress/>
                }
                {(!isLoadingBook && !book) &&
                    <Alert severity={'error'}>
                        Книга не найдена...
                    </Alert>
                }
                {book &&
                    <React.Fragment>
                        <BookView book={book}/>
                        <Typography paddingTop={'50px'} variant={'h5'}>
                            Отзывы
                        </Typography>
                        <Stack spacing={2} paddingTop={'50px'}>
                            {orderFeedbacks.map(feedback => {
                                return (
                                    <Stack key={feedback.id} spacing={1}>
                                        <Typography>
                                            {feedback.orderOwner.fullName}
                                        </Typography>
                                        <Rating readOnly value={feedback.rating}/>
                                        <Typography>
                                            {feedback.text}
                                        </Typography>
                                    </Stack>
                                )
                            })}
                        </Stack>
                    </React.Fragment>
                }
            </div>
        </div>
    );
};

export default BookPage;