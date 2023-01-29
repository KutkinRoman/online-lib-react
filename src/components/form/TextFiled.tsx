import React, {useMemo} from 'react';
import './styles.css';

export interface TextFiledProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string | undefined,
    register?: any;
}

const TextFiled = ({label, className, register, id, ...props}: TextFiledProps) => {

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
        </div>
    );
};

export default TextFiled;