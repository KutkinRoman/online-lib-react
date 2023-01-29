import React, {useMemo} from 'react';
import {TextFiledProps} from "./TextFiled";

interface SelectProps<T> extends TextFiledProps {
    items: T[],
    getLabelItem: (item: T) => string
}

function Select<T>({label, className, register, id, items, getLabelItem, ...props}: SelectProps<T>) {

    const inputId = useMemo(() => {
        return (id) ? id : (register) ? register.name : 'input_' + Math.random()
    }, [register, id])


    const options = useMemo(() => {
        return (
            <React.Fragment>
                {items.map((item, idx) => {
                    return (
                        <option key={`option_${idx}`}>
                            {getLabelItem(item)}
                        </option>
                    )
                })}
            </React.Fragment>
        )
    }, [items])

    return (
        <div
            className={[className, 'formInputWrapper'].join(' ')}
            id={`input_wrapper_${id}`}
        >
            {label && <div className={'formLabel'} children={label}/>}
            <div className={'formInputContainer'}>
                <select
                    id={inputId}
                    className={'formInput'}
                    {...register}
                    {...props}
                    defaultValue={null}
                    children={options}
                />
            </div>
        </div>
    );
};

export default Select;