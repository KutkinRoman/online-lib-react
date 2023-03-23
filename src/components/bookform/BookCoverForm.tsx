import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDropzone} from "react-dropzone";
import {InterfaceFile} from "../../data/entities/File";
import {BookService} from "../../data/services/BookService";
import {CircularProgress} from "@mui/material";

interface BookCoverFormProps {
    bookId: string
}

const BookCoverForm = ({bookId}: BookCoverFormProps) => {
    const [isLoadin, setIsLoading] = useState(false)
    const [cover, setCover] = useState<InterfaceFile | null>(null)

    const onDrop = useCallback(async (acceptedFiles: any) => {
        if (acceptedFiles[0]) {
            try {
                setIsLoading(true)
                const formData = new FormData()
                formData.set('file', acceptedFiles[0])
                const response = await BookService.uploadCover(bookId, formData)
                setCover(response.data)
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
                const response = await BookService.getCover(bookId)
                setCover(response.data)
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
            ? 'formInputContainer bookCoverInputContainer bookCoverInputContainerDrag'
            : 'formInputContainer bookCoverInputContainer'
    }, [isDragActive])

    return (
        <div className={'formInputWrapper bookCoverFormWrapper'}>
            <div className={'formLabel'}>Обложка книги</div>
            <div className={containerStyle} {...getRootProps()}>
                {isLoadin
                    ?
                    <CircularProgress color={'primary'} size={25}/>
                    :
                    <React.Fragment>
                        <input {...getInputProps()} />
                        {cover &&
                            <img className={'bookCoverImage'} src={cover.link} alt={cover.fileName}/>
                        }
                        {isDragActive ?
                            <p className={'formLabel'}>Заргузить файл ...</p> :
                            <p className={'formLabel'}>Перетащите файл или нажмите, чтобы выбрать файлы</p>
                        }
                    </React.Fragment>
                }
            </div>
        </div>
    );
};

export default BookCoverForm;