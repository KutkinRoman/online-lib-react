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
import EBookReader from "./EBookReader";

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

    const {
        register,
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: {
            isSubmitting,
            errors
        }
    } = useForm({});

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
    }, [])


    useEffect(() => console.log('Errors: ', errors), [errors])

    return (
        <div className={'formContainer bookEditForm'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'formHeaderTitle'}>
                    Редактор книги
                </div>
                <TextFiled
                    label={'Наименование книги'}
                    register={name}
                />
                <TextArea
                    label={'Описание книга'}
                    register={description}
                    rows={5}
                />
                {categoryIds.fields.map((field, index) => (
                    <Select
                        key={field.id}
                        register={register(`categoryIds.${index}`)}
                        label={`Категория ${index + 1}`}
                        items={bookStore.categories}
                        getLabelItem={item => item.name}
                        getOptionValue={item => item.id}
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
                        register={register(`authorIds.${index}`)}
                        label={`Автор ${index + 1}`}
                        items={authorStore.authors}
                        getLabelItem={item => item.fullName}
                        getOptionValue={item => item.id}
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
                />
                <TextFiled
                    label={'Цена'}
                    register={price}
                    type={'number'}
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
            <EBookReader/>
        </div>
    );
};

export default observer(BookForm);