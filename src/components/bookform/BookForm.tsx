import React, {useEffect} from 'react';
import Button from "../form/Button";
import TextFiled from "../form/TextFiled";
import Select from "../form/Select";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import {useFieldArray, useForm} from "react-hook-form";

/**
 * React hook form field array example: https://stackblitz.com/edit/react-rrz1sz?file=src%2Fcomponents%2FSocialContainer.jsx
 *
 */

const BookForm = () => {
    const bookStore = useAppStore().bookStore
    const authorStore = useAppStore().authorStore

    useEffect(() => {
        bookStore.initCategories()
        authorStore.initAutors()
    }, [])

    const {register, control, handleSubmit, reset, trigger, setError} = useForm({});

    const categories = useFieldArray({
        control,
        name: 'categories',
    })

    const authors = useFieldArray({
        control,
        name: 'authors',
    })

    useEffect(() => {
        categories.append(null)
        authors.append(null)
    }, [])

    const onSubmit = (date: any) => {
        console.dir(date)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextFiled
                label={'Наименование'}
            />
            {categories.fields.map((field, index) => (
                <Select
                    key={field.id}
                    register={register(`categories.${index}.value`)}
                    label={`Категория ${index + 1}`}
                    items={bookStore.categories}
                    getLabelItem={item => item.name}
                    getOptionValue={item => item.id}
                />
            ))}
            {authors.fields.map((field, index) => (
                <Select
                    key={field.id}
                    register={register(`authors.${index}.value`)}
                    label={`Автор ${index + 1}`}
                    items={authorStore.authors}
                    getLabelItem={item => item.fullName}
                    getOptionValue={item => item.id}
                />
            ))}
            <Button
                type={'submit'}
                children={'Сохранить'}
            />
        </form>
    );
};

export default observer(BookForm);