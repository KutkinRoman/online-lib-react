import React, {useEffect} from 'react';
import {useSnackbar} from "notistack";

export const useAlert = () => {
    const {enqueueSnackbar} = useSnackbar();

    const successSaved = () => enqueueSnackbar('Сохранено', {variant: "success"})

    const errorSaved = () => enqueueSnackbar('Ошибка при сохранении', {variant: "error"})

    return {
        enqueueSnackbar,
        successSaved,
        errorSaved
    }
};

export const useAlertSubmit = (isSubmitSuccessful: boolean) => {
    const {successSaved} = useAlert();

    useEffect(() => {
        if (isSubmitSuccessful) {
            successSaved()
        }
    }, [isSubmitSuccessful])

};

