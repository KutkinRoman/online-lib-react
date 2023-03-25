import React, {useEffect, useState} from 'react';
import EBookReader from "../components/bookform/EBookReader";
import {useParams} from "react-router-dom";
import {InterfaceFile} from "../data/entities/File";
import {BookService} from "../data/services/BookService";
import {Alert, LinearProgress} from "@mui/material";

const EBookReaderPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {bookId} = useParams()
    const [file, setFile] = useState<InterfaceFile | null>(null)

    useEffect(() => {
        const initFile = async () => {
           try {
               if (!bookId) return;
               const response = await BookService.getEBook(bookId)
               setFile(response.data)
           } catch (e) {
               console.log(e)
           } finally {
               setIsLoading(false)
           }
        }
        initFile()
    }, [])


    return (
        <div className={'wrapper'}>
            {isLoading &&
                <LinearProgress />
            }
            {(!isLoading && !file) &&
                <Alert severity={'error'}>
                    Книга не найдена...
                </Alert>
            }
            {(file && bookId) &&
                <EBookReader
                    url={file.link}
                    bookId={bookId}
                />
            }
        </div>
    );
};

export default EBookReaderPage;