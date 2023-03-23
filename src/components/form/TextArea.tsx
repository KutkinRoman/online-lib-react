import React, {useMemo} from 'react';
import {Alert} from "@mui/material";

export interface TextFiledProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string | undefined,
    register?: any;
    containerClassName?: string
    textareaClassname?: string
    errors?: any;
}


const TextArea = ({
                      label,
                      className,
                      containerClassName,
                      textareaClassname,
                      register,
                      errors,
                      id,
                      ...props
                  }: TextFiledProps) => {

    const inputId = useMemo(() => {
        return (id) ? id : (register) ? register.name : 'input_' + Math.random()
    }, [register, id])

    return (
        <div
            className={[className, 'formInputWrapper'].join(' ')}
            id={`input_wrapper_${id}`}
        >
            {label && <div className={'formLabel'} children={label}/>}
            <div className={[containerClassName, 'formTextAriaContainer'].join(' ')}>
                <textarea
                    id={inputId}
                    className={[textareaClassname, 'formInput'].join(' ')}
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

export default TextArea;