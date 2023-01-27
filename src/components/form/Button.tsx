import React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button = ({className, ...props}: ButtonProps) => {
    return (
        <button className={['formButton', className].join(' ')} {...props}/>
    );
};

export default Button;