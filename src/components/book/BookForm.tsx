import React, {useEffect} from 'react';
import Button from "../form/Button";
import TextFiled from "../form/TextFiled";
import Select from "../form/Select";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import {useFieldArray, useForm} from "react-hook-form";

const BookForm = () => {
    const bookStore = useAppStore().bookStore

    useEffect(() => {
        bookStore.initCategories()
    }, [])

    const {register, control, handleSubmit, reset, trigger, setError} = useForm({});

    const {fields, append, remove} = useFieldArray({
        control,
        name: "categories",
    });

    useEffect(() => {
        append(null)
    }, [])

    const onSubmit = (date: any) => {
        console.log(date)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextFiled
                label={'Наименование'}
            />
            {fields.map((field, index) => (
                <Select
                    key={field.id}
                    {...register(`categories.${index}.value`)}
                    label={'Категория'}
                    items={bookStore.categories}
                    getLabelItem={item => item.name}
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