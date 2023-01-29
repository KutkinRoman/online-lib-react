import React from 'react';
import FormHeader from "../form/FormHeader";
import TextFiled from "../form/TextFiled";
import Button from "../form/Button";
import './styles.css';
import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../context/useAppStore";
import {useForm} from "react-hook-form";

const CreateAccountForm = () => {

    const navigate = useNavigate()
    const appStore = useAppStore()
    const onSubmit = async (data: any) => {
        try {
            await appStore.authStore.registration(data)
            // navigate('/')
        } catch (e) {
            console.log(e)
        }
    };

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isValid, isLoading, isSubmitSuccessful, isSubmitting, touchedFields, submitCount},
    } = useForm();

    const firstName = register('firstName', {required: true})
    const lastName = register('lastName', {required: true})
    const username = register('username', {required: true})
    const password = register('password', {required: true})

    return (
        <form className={'accountFormContainer'} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title={'Create an Account'} description={'Please fill in your correct information'}/>
            <div className={'accountFormBody'}>
                <TextFiled label={'First Name'} placeholder={'Enter your first name'} register={firstName}/>
                <TextFiled label={'Last Name'} placeholder={'Enter your last name'} register={lastName}/>
                <TextFiled label={'E-mail'} placeholder={'Enter a valid email address'} register={username}/>
                <TextFiled label={'Password'} placeholder={'Enter a 6 digit password '} register={password}/>
                <Button
                    type={'submit'}
                    className={'accountSubmitButton'}
                    children={'Create'}
                    isLoading={isSubmitting}
                />
            </div>
        </form>
    );
};

export default CreateAccountForm;