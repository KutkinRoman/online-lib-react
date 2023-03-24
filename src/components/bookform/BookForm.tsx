import React, {useEffect} from 'react';
import Button from "../form/Button";
import TextFiled from "../form/TextFiled";
import Select from "../form/Select";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import {useFieldArray, useForm} from "react-hook-form";
import "./styles.css";
import {BookService} from "../../data/services/BookService";
import TextArea from "../form/TextArea";
import {InterfaceBookForm} from "../../data/entities/BookForm";
import BookCoverForm from "./BookCoverForm";
import EBookForm from "./EBookForm";
import {useNavigate} from "react-router-dom";
import {useAlertSubmit} from "../../hooks/useAlert";

/**
 * React hook form field array example: https://stackblitz.com/edit/react-rrz1sz?file=src%2Fcomponents%2FSocialContainer.jsx
 *
 */

interface BookFormProps {
    bookId?: string
}

const BookForm = ({bookId}: BookFormProps) => {
    const bookStore = useAppStore().bookStore
    const authorStore = useAppStore().authorStore
    const navigate = useNavigate()

    const {
        register,
        control,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: {
            isSubmitSuccessful,
            isSubmitting,
            errors,
        }
    } = useForm({});

    useAlertSubmit(isSubmitSuccessful)

    const id = register('id')
    const name = register('name', {required: true})
    const description = register('description', {required: true})
    const price = register('price', {required: true})
    const authorDescription = register('authorDescription', {required: true})
    const categoryIds = useFieldArray({control, name: 'categoryIds',})
    const authorIds = useFieldArray({control, name: 'authorIds',})

    const onSubmit = async (data: any) => {
        const response = await BookService.saveForm(data)
        updateForm(response.data)
        navigate(`/admin-panel/book-edit/${response.data.id}`)
    }

    const updateForm = (data: InterfaceBookForm) => {
        setValue('id', data.id)
        setValue('name', data.name)
        setValue('description', data.description)
        setValue('price', data.price)
        setValue('authorDescription', data.authorDescription)
        categoryIds.replace(data.categoryIds)
        authorIds.replace(data.authorIds)
    }

    useEffect(() => {
        const iniForm = async () => {
            if (!bookId) return;
            if (bookId === 'new') {
                reset()
                categoryIds.append(null)
                authorIds.append(null)
            } else {
                const {data} = await BookService.getFormByBookId(bookId)
                updateForm(data)
            }
        }

        bookStore.initCategories()
        authorStore.initAutors()
        iniForm()
    }, [bookId])


    useEffect(() => console.log('Errors: ', errors), [errors])

    return (
        <div className={'formContainer bookEditForm'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'formHeaderTitle formHeaderTitleLeft'}>
                    Редактор книги
                </div>
                <TextFiled
                    label={'Наименование книги'}
                    register={name}
                    errors={errors}
                />
                <TextArea
                    label={'Описание книга'}
                    register={description}
                    rows={5}
                    errors={errors}
                />
                {categoryIds.fields.map((field, index) => (
                    <Select
                        key={field.id}
                        register={register(`categoryIds.${index}`, {required: true})}
                        label={`Категория ${index + 1}`}
                        items={bookStore.categories}
                        getLabelItem={item => item.name}
                        getOptionValue={item => item.id}
                        errors={errors}
                    />
                ))}
                <Button
                    type={'button'}
                    children={'Добавить категорию'}
                    buttonType={'secondary'}
                    onClick={() => categoryIds.append(null)}
                />
                {authorIds.fields.map((field, index) => (
                    <Select
                        key={field.id}
                        register={register(`authorIds.${index}`, {required: true})}
                        label={`Автор ${index + 1}`}
                        items={authorStore.authors}
                        getLabelItem={item => item.fullName}
                        getOptionValue={item => item.id}
                        errors={errors}
                    />
                ))}
                <Button
                    type={'button'}
                    children={'Добавить автора'}
                    buttonType={'secondary'}
                    onClick={() => authorIds.append(null)}
                />
                <TextArea
                    label={'Описание автора'}
                    register={authorDescription}
                    rows={5}
                    errors={errors}
                />
                <TextFiled
                    label={'Цена'}
                    register={price}
                    type={'number'}
                    errors={errors}
                />
                <Button
                    type={'submit'}
                    children={'Сохранить'}
                    isLoading={isSubmitting}
                />
            </form>
            {getValues('id') &&
                <div className={'bookFilesContainer'}>
                    <BookCoverForm bookId={getValues('id')}/>
                    <EBookForm bookId={getValues('id')}/>
                </div>
            }
        </div>
    );
};

export default observer(BookForm);