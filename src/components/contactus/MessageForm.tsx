import React from 'react';
import './styles.css'
import TextFiled from "../form/TextFiled";
import Button from "../form/Button";
import TextArea from "../form/TextArea";
import {useForm} from "react-hook-form";
import {MessageService} from "../../data/services/MessageService";

const MessageForm = () => {
    const onSubmit = async (data: any) => {
        try {
            await MessageService.sendUserMessage(data)
            reset()
        } catch (e) {
            console.log(e)
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isDirty, isValid, isLoading, isSubmitSuccessful, isSubmitting, touchedFields, submitCount},
    } = useForm();

    const fullName = register('fullName', {required: true})
    const email = register('email', {required: true})
    const message = register('message', {required: true})

    return (
        <div className={'contactUsLandingMessageFormContainer'}>
            <div className={'formHeaderTitle contactUsLandingMessageFormTitle'} children={'Отправьте нам сообщение'}/>
            <form className={'contactUsLandingMessageForm'} onSubmit={handleSubmit(onSubmit)}>
                <TextFiled
                    label={'Полное имя'}
                    register={fullName}
                />
                <TextFiled
                    label={'Адрес электронной почты'}
                    register={email}
                />
                <TextArea
                    label={'Сообщение'}
                    containerClassName={'contactUsLandingMessageFormTextAreaContainer'}
                    textareaClassname={'contactUsLandingMessageFormTextArea'}
                    register={message}
                />
                <Button
                    children={'Отправить'}
                    isLoading={isSubmitting}
                />
            </form>
        </div>
    );
};

export default MessageForm;