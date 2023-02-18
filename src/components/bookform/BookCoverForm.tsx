import React, {useCallback} from 'react';
import {useDropzone} from "react-dropzone";

interface BookCoverFormProps {
    bookId: string
}
const BookCoverForm = ({bookId}: BookCoverFormProps) => {

    const onDrop = useCallback((acceptedFiles: any) => {

        console.log(acceptedFiles)
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className={'formInputWrapper bookCoverFormWrapper'}>
            <div
                className={'formInputContainer bookCoverInputContainer'}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        </div>
    );
};

export default BookCoverForm;