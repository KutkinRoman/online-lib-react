import React from 'react';
import './styles.css';
import CreateAccountForm from "../components/createaccountform/CreateAccountForm";

const SignUpPage = () => {
    return (
        <div className={'wrapper signUpPage'}>
            <div className={'signUpLogoContainer'}>
                <div className={'signUpBackground'}/>
                <div className={'signUpLogo'}/>
            </div>
            <div className={'signUpFormContainer'}>
                <CreateAccountForm/>
            </div>
        </div>
    );
};

export default SignUpPage;