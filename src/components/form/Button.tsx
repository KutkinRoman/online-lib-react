import React, {useMemo} from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button = ({className, disabled, ...props}: ButtonProps) => {

    const buttonClassname = useMemo(() => {
        if (disabled) {
            return ['formButtonDisable', className].join(' ')
        }
        return ['formButton', className].join(' ')
    }, [disabled, className])

    return (
        <button
            className={buttonClassname}
            disabled={disabled}
            {...props}
        />
    );
};

export default Button;