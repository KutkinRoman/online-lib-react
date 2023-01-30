import React, {useMemo} from 'react';

export interface TextFiledProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string | undefined,
    register?: any;
    containerClassName?: string
    textareaClassname?: string
}


const TextArea = ({
                      label,
                      className,
                      containerClassName,
                      textareaClassname,
                      register,
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
        </div>
    );
};

export default TextArea;