import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDropzone} from "react-dropzone";
import {InterfaceFile} from "../../data/entities/File";
import {BookService} from "../../data/services/BookService";

interface BookCoverFormProps {
    bookId: string
}

const BookCoverForm = ({bookId}: BookCoverFormProps) => {
    const [cover, setCover] = useState<InterfaceFile | null>(null)

    const onDrop = useCallback(async (acceptedFiles: any) => {
        if (acceptedFiles[0]) {
            const formData = new FormData()
            formData.set('file', acceptedFiles[0])
            const response = await BookService.uploadCover(bookId, formData)
            setCover(response.data)
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    useEffect(() => {
        const fetchCover = async () => {
            const response = await BookService.getCover(bookId)
            setCover(response.data)
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
                <input {...getInputProps()} />
                {cover &&
                    <img className={'bookCoverImage'} src={cover.link} alt={cover.fileName} />
                }
                {isDragActive ?
                    <p className={'formLabel'}>Заргузить файл ...</p> :
                    <p className={'formLabel'}>Перетащите файл или нажмите, чтобы выбрать файлы</p>
                }
            </div>
        </div>
    );
};

export default BookCoverForm;