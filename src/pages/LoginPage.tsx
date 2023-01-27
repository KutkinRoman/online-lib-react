import React from 'react';
import './styles.css';
import LoginForm from "../components/loginform/LoginForm";

const LoginPage = () => {
    return (
        <div className={'wrapper loginPage'}>
            <div className={'loginPageContainer'}>
                <div className={'loginPageLogo'}/>
                <LoginForm/>
            </div>
        </div>
    );
};

export default LoginPage;