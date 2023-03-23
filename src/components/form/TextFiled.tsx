import React, {useMemo} from 'react';
import './styles.css';
import {Alert} from "@mui/material";

export interface TextFiledProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string | undefined,
    register?: any;
    errors?: any;
}

const TextFiled = ({label, className, register, id, errors, ...props}: TextFiledProps) => {

    const inputId = useMemo(() => {
        return (id) ? id : (register) ? register.name : 'input_' + Math.random()
    }, [register, id])

    return (
        <div
            className={[className, 'formInputWrapper'].join(' ')}
            id={`input_wrapper_${id}`}
        >
            {label && <div className={'formLabel'} children={label}/>}
            <div className={'formInputContainer'}>
                <input
                    id={inputId}
                    className={'formInput'}
                    {...register}
                    {...props}
                />
            </div>
            {(register && register.name && errors && errors[register.name]) &&
                <div className={'formInputAlert'}>
                    <Alert severity="error">
                        {errors[register.name].message ? errors[register.name].message : 'Error!'}
                    </Alert>
                </div>
            }
        </div>
    );
};

export default TextFiled;