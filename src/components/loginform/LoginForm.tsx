import React from 'react';
import FormHeader from "../form/FormHeader";
import TextFiled from "../form/TextFiled";
import Button from "../form/Button";
import './styles.css'

const LoginForm = () => {
    return (
        <div className={'loginFormContainer'}>
            <FormHeader title={'Welcome Back!'} description={'Please enter your details below'}/>
            <div className={'loginFormBody'}>
                <TextFiled label={'E-mail'} placeholder={'Please fill in your correct information'}/>
                <TextFiled label={'Password'} type={'password'}/>
                <Button className={'loginSubmitButton'} children={'Log in'}/>
            </div>
        </div>
    );
};

export default LoginForm;