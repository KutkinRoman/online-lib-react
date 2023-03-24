import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AdminPanelPage from "./index";
import {useForm} from "react-hook-form";
import {useAlertSubmit} from "../../hooks/useAlert";
import TextFiled from "../../components/form/TextFiled";
import Button from "../../components/form/Button";
import {BookCategoryService} from "../../data/services/BookCategoryService";
import {AuthorService} from "../../data/services/AuthorService";
import {InterfaceAuthor} from "../../data/entities/Author";

const AuthorsEditPage = () => {
    const {authorId} = useParams();
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

    const onSubmit = async (data: any) => {
        const response = await AuthorService.save(data)
        updateForm(response.data)
        navigate(`/admin-panel/author-edit/${response.data.id}`)
    }

    const updateForm = (data: InterfaceAuthor) => {
        setValue('id', data.id)
        setValue('firstName', data.firstName)
        setValue('lastName', data.lastName)
        setValue('middleName', data.middleName)
    }

    useEffect(() => {
        const iniForm = async () => {
            if (!authorId) return;
            if (authorId !== 'new') {
                const {data} = await AuthorService.getById(authorId)
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
                        Author Edit
                    </div>
                    <TextFiled
                        label={'First Name'}
                        register={
                            register('firstName', {required: true})
                        }
                        errors={errors}
                    />
                    <TextFiled
                        label={'Last Name'}
                        register={
                            register('lastName', {required: true})
                        }
                        errors={errors}
                    />
                    <TextFiled
                        label={'Middle Name'}
                        register={
                            register('middleName')
                        }
                        errors={errors}
                    />
                    <Button
                        type={'submit'}
                        children={'Сохранить'}
                        isLoading={isSubmitting}
                    />
                </form>
            </div>
        </AdminPanelPage>
    );
};

export default AuthorsEditPage;
