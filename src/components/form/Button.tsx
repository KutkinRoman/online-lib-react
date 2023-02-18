import {CircularProgress} from '@mui/material';
import React, {useMemo} from 'react';

type ButtonType = 'primary' | 'secondary'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    loadingText?: string;
    buttonType?: ButtonType
}

const Button = ({
                    className,
                    isLoading,
                    disabled,
                    children,
                    loadingText,
                    buttonType = 'primary',
                    ...props
                }: ButtonProps) => {

    const buttonClassname = useMemo(() => {
        if (disabled || isLoading) {
            return [
                'formButtonDisable',
                buttonType === 'primary' ? 'formButtonDisablePrimary' : 'formButtonDisableSecondary',
                className
            ].join(' ')
        }
        return [
            'formButton',
            buttonType === 'primary' ? 'formButtonPrimary' : 'formButtonSecondary',
            className
        ].join(' ')
    }, [disabled, isLoading, className, buttonType])

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