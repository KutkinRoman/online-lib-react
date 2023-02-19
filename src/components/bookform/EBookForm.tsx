import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {InterfaceFile} from "../../data/entities/File";
import {BookService} from "../../data/services/BookService";
import {useDropzone} from "react-dropzone";
import Button from "../form/Button";

interface EBookFormFormProps {
    bookId: string
}

const EBookForm = ({bookId}: EBookFormFormProps) => {
    const [eBook, setEBook] = useState<InterfaceFile | null>(null)

    const onDrop = useCallback(async (acceptedFiles: any) => {
        if (acceptedFiles[0]) {
            const formData = new FormData()
            formData.set('file', acceptedFiles[0])
            const response = await BookService.uploadEBook(bookId, formData)
            setEBook(response.data)
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    useEffect(() => {
        const fetchCover = async () => {
            const response = await BookService.getEBook(bookId)
            setEBook(response.data)
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
                    <input {...getInputProps()} />
                    {eBook &&
                        <div className={'formLabel bookEBookPath'}>{eBook.path}</div>
                    }
                    {isDragActive ?
                        <p className={'formLabel'}>Заргузить файл ...</p> :
                        <p className={'formLabel'}>Перетащите файл или нажмите, чтобы выбрать файлы</p>
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