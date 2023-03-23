import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {InterfaceFile} from "../../data/entities/File";
import {BookService} from "../../data/services/BookService";
import {useDropzone} from "react-dropzone";
import Button from "../form/Button";
import {Alert, CircularProgress} from "@mui/material";

interface EBookFormFormProps {
    bookId: string
}

const EBookForm = ({bookId}: EBookFormFormProps) => {
    const [isLoadin, setIsLoading] = useState(false)
    const [eBook, setEBook] = useState<InterfaceFile | null>(null)

    const onDrop = useCallback(async (acceptedFiles: any) => {
        if (acceptedFiles[0]) {
            try {
                setIsLoading(true)
                const file = acceptedFiles[0]
                if (!file.name.endsWith('epub')){
                    const message = 'File extension is not epub'
                    alert(message)
                    throw new Error(message)
                }
                const formData = new FormData()
                formData.set('file', file)
                const response = await BookService.uploadEBook(bookId, formData)
                setEBook(response.data)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    useEffect(() => {
        const fetchCover = async () => {
            try {
                setIsLoading(true)
                const response = await BookService.getEBook(bookId)
                setEBook(response.data)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCover()
    }, [bookId])

    const containerStyle = useMemo(() => {
        return isDragActive
            ? 'formInputContainer bookEBookInputContainer bookCoverInputContainerDrag'
            : 'formInputContainer bookEBookInputContainer'
    }, [isDragActive])

    return (
        <div className={'formInputWrapper bookEBookFormWrapper'}>
            <div className={'formLabel'}>Файл книги</div>
            <div>
                <div className={containerStyle} {...getRootProps()}>
                    {isLoadin
                        ?
                        <CircularProgress color={'primary'} size={25}/>
                        :
                        <React.Fragment>
                            <input {...getInputProps()} />
                            {eBook &&
                                <div className={'formLabel bookEBookPath'}>{eBook.fileName}</div>
                            }
                            {isDragActive ?
                                <p className={'formLabel'}>Заргузить файл ...</p> :
                                <p className={'formLabel'}>Перетащите файл или нажмите, чтобы выбрать файлы</p>
                            }
                        </React.Fragment>
                    }
                </div>
                {eBook &&
                    <Button type={'button'} onClick={() => window.open(eBook?.link)}>
                        Открыть
                    </Button>
                }
            </div>
        </div>
    );
};

export default EBookForm;