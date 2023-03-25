import React, {useEffect, useState} from 'react';
import EBookReader from "../components/bookform/EBookReader";
import {useParams} from "react-router-dom";
import {InterfaceFile} from "../data/entities/File";
import {BookService} from "../data/services/BookService";

const EBookReaderPage = () => {
    const {bookId} = useParams()
    const [file, setFile] = useState<InterfaceFile | null>(null)

    useEffect(() => {
        const initFile = async () => {
            if (!bookId) return;
            const response = await BookService.getEBook(bookId)
            setFile(response.data)
        }
        initFile()
    }, [])


    return (
        <div className={'wrapper'}>
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