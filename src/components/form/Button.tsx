import {CircularProgress} from '@mui/material';
import React, {useMemo} from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean,
    loadingText?: string;
}

const Button = ({className, isLoading, disabled, children, loadingText, ...props}: ButtonProps) => {

    const buttonClassname = useMemo(() => {
        if (disabled || isLoading) {
            return ['formButtonDisable', className].join(' ')
        }
        return ['formButton', className].join(' ')
    }, [disabled, isLoading, className])

    const childrenMemo = useMemo(() => {
        if (isLoading) {
            return <CircularProgress size={25} style={{color: '#fff'}}/>
        }
        return children
    }, [isLoading, children, loadingText])

    return (
        <button
            className={buttonClassname}
            disabled={disabled}
            children={childrenMemo}
            {...props}
        />
    );
};

export default Button;