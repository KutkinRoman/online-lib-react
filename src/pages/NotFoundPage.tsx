import React from 'react';
import {Alert, Stack} from "@mui/material";

const NotFoundPage = () => {
    return (
        <div className={'wrapper notFoundPage'}>
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="error">
                    Страница не найдена!
                </Alert>
            </Stack>
        </div>
    );
};

export default NotFoundPage;