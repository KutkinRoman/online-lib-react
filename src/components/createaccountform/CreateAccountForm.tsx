import React from 'react';
import FormHeader from "../form/FormHeader";
import TextFiled from "../form/TextFiled";
import Button from "../form/Button";
import './styles.css';

const CreateAccountForm = () => {
    return (
        <div className={'accountFormContainer'}>
            <FormHeader title={'Create an Account'} description={'Please fill in your correct information'}/>
            <div className={'accountFormBody'}>
                <TextFiled label={'First Name'} placeholder={'Enter your first name'}/>
                <TextFiled label={'Last Name'} placeholder={'Enter your last name'}/>
                <TextFiled label={'Username'} placeholder={'Enter your username'}/>
                <TextFiled label={'E-mail'} placeholder={'Enter a valid email address'}/>
                <TextFiled label={'Password'} placeholder={'Enter a 6 digit password '}/>
                <Button className={'accountSubmitButton'} children={'Create'}/>
            </div>
        </div>
    );
};

export default CreateAccountForm;