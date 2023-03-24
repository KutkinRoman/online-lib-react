import React, {useEffect} from 'react';
import AdminPanelPage from "./index";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAlertSubmit} from "../../hooks/useAlert";
import TextFiled from "../../components/form/TextFiled";
import Button from "../../components/form/Button";
import TextArea from "../../components/form/TextArea";
import {InterfaceBlogForm} from "../../data/entities/BlogForm";
import {BlogService} from "../../data/services/BlogService";
import BlogImageForm from "../../components/blog/BlogImageForm";

const BlogEditPage = () => {
    const {blogId} = useParams();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {
            isSubmitSuccessful,
            isSubmitting,
            errors,
        }
    } = useForm({});

    useAlertSubmit(isSubmitSuccessful)

    const id = register('id')
    const name = register('name', {required: true})
    const text = register('text', {required: true})

    const onSubmit = async (data: any) => {
        const response = await BlogService.saveForm(data)
        updateForm(response.data)
        navigate(`/admin-panel/blog-edit/${response.data.id}`)
    }

    const updateForm = (data: InterfaceBlogForm) => {
        setValue('id', data.id)
        setValue('name', data.name)
        setValue('text', data.text)
        console.log(data)
    }

    useEffect(() => {
        const iniForm = async () => {
            if (!blogId) return;
            if (blogId !== 'new') {
                const response = await BlogService.getFormById(blogId)
                updateForm(response.data)
            }
        }
        iniForm()
    }, [])

    return (
        <AdminPanelPage>
            <div className={'formContainer bookEditForm'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'formHeaderTitle formHeaderTitleLeft'}>
                        Blog Edit
                    </div>
                    <TextFiled
                        label={'Name'}
                        register={name}
                        errors={errors}
                    />
                    <TextArea
                        label={'Text'}
                        register={text}
                        rows={15}
                        errors={errors}
                    />
                    <Button
                        type={'submit'}
                        children={'Submit'}
                        isLoading={isSubmitting}
                    />
                </form>
                {(blogId && blogId !== 'new')&&
                    <BlogImageForm blogId={blogId}/>
                }
            </div>
        </AdminPanelPage>
    );
};

export default BlogEditPage;