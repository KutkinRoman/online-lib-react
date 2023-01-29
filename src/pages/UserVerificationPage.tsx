import {CircularProgress} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAppStore} from "../context/useAppStore";

const UserVerificationPage = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const authStore = useAppStore().authStore

    const onSubmit = async (secret: string) => {
        try {
            await authStore.verification(secret)
            navigate('/')
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const secret = searchParams.get('secret')
        if (secret) {
            onSubmit(secret)
        }
    }, [searchParams])

    return (
        <div className={'wrapper userVerificationPage'}>
            <CircularProgress size={50} style={{color: '#fff'}}/>
        </div>
    );
};

export default UserVerificationPage;