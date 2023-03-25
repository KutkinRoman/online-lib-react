import React, {useEffect, useState} from 'react';
import NavBar from "../components/navbar/NavBar";
import {useParams} from "react-router-dom";
import {InterfaceBook} from "../data/entities/Book";
import {BookService} from "../data/services/BookService";
import {Alert, LinearProgress} from "@mui/material";
import BookView from "../components/book/BookView";

const BookPage = () => {
    const {bookId} = useParams()

    const [isLoadingBook, setIsLoadinBook] = useState(true)
    const [book, setBook] = useState<InterfaceBook | null>(null)

    useEffect(() => {
        const initBook = async () => {
           try {
               if (bookId){
                   const response = await BookService.getBookById(bookId);
                   setBook(response.data)
               }
           } catch (e){
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
                    <LinearProgress />
                }
                {(!isLoadingBook && !book) &&
                    <Alert severity={'error'}>
                        Книга не найдена...
                    </Alert>
                }
                {book &&
                    <BookView book={book}/>
                }
            </div>
        </div>
    );
};

export default BookPage;