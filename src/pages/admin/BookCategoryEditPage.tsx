import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AdminPanelPage from "./index";
import {useForm} from "react-hook-form";
import {useAlertSubmit} from "../../hooks/useAlert";
import {BookCategoryService} from "../../data/services/BookCategoryService";
import {InterfaceBookCategory} from "../../data/entities/BookCategory";
import TextFiled from "../../components/form/TextFiled";
import Button from "../../components/form/Button";

const BookCategoryEditPage = () => {
    const {categoryId} = useParams();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setValue,

        formState: {
            isSubmitSuccessful,
            isSubmitting,
            errors,
        }
    } = useForm({});

    useAlertSubmit(isSubmitSuccessful)

    const id = register('id')
    const name = register('name', {required: true})

    const onSubmit = async (data: any) => {
        const response = await BookCategoryService.save(data)
        updateForm(response.data)
        navigate(`/admin-panel/book-category-edit/${response.data.id}`)
    }

    const updateForm = (data: InterfaceBookCategory) => {
        setValue('id', data.id)
        setValue('name', data.name)
    }

    useEffect(() => {
        const iniForm = async () => {
            if (!categoryId) return;
            if (categoryId !== 'new') {
                const {data} = await BookCategoryService.getById(categoryId)
                updateForm(data)
            }
        }
        iniForm()
    }, [])

    return (
        <AdminPanelPage>
            <div className={'formContainer bookEditForm'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'formHeaderTitle formHeaderTitleLeft'}>
                        Category Edit
                    </div>
                    <TextFiled
                        label={'Name'}
                        register={name}
                        errors={errors}
                    />
                    <Button
                        type={'submit'}
                        children={'Submit'}
                        isLoading={isSubmitting}
                    />
                </form>
            </div>
        </AdminPanelPage>
    );
};

export default BookCategoryEditPage;