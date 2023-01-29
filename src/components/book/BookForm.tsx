import React, {useEffect} from 'react';
import Button from "../form/Button";
import TextFiled from "../form/TextFiled";
import Select from "../form/Select";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";

const BookForm = () => {
    const bookStore = useAppStore().bookStore

    useEffect(() => {
        bookStore.initCategories()
    }, [])

    return (
        <form>
            <TextFiled
                label={'Наименование'}
            />
            <Select
                label={'Категория'}
                items={bookStore.categories}
                getLabelItem={item => item.name}
            />
            <Button
                children={'Сохранить'}
            />
        </form>
    );
};

export default observer(BookForm);