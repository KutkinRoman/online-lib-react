import React from 'react';
import FormHeader from "../form/FormHeader";
import TextFiled from "../form/TextFiled";
import Button from "../form/Button";
import './styles.css'
import {useForm} from "react-hook-form";
import {useAppStore} from "../../context/useAppStore";

const LoginForm = () => {
    const appStore = useAppStore()
    const onSubmit = (data: any) =>  appStore.authStore.login(data);

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isValid, isLoading, isSubmitting, touchedFields, submitCount},
    } = useForm();

    const usernameRegister = register('username', {
        required: true,
        minLength: 4
    })

    const passwordRegister = register('password', {
        required: true,
        minLength: 4
    })

    return (
        <form className={'loginFormContainer'} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title={'Welcome Back!'} description={'Please enter your details below'}/>
            <div className={'loginFormBody'}>
                <TextFiled
                    label={'E-mail'}
                    placeholder={'Please fill in your correct information'}
                    register={usernameRegister}
                />
                <TextFiled
                    label={'Password'}
                    type={'password'}
                    register={passwordRegister}
                />
                <Button
                    type={'submit'}
                    className={'loginSubmitButton'}
                    children={'Log in'}
                />
            </div>
        </form>
    );
};

export default LoginForm;