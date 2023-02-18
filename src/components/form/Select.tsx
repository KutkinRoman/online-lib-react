import React, {useMemo} from 'react';
import {TextFiledProps} from "./TextFiled";

interface SelectProps<T> extends TextFiledProps {
    items: T[],
    getLabelItem: (item: T) => string,
    getOptionValue: (item: T) => string | ReadonlyArray<string> | number | undefined;
}

function Select<T>({label, className, register, id, items, getLabelItem, getOptionValue, ...props}: SelectProps<T>) {

    const inputId = useMemo(() => {
        return (id) ? id : (register) ? register.name : 'input_' + Math.random()
    }, [register, id])

    const options = useMemo(() => {
        return (
            <React.Fragment>
                <option key={`option_empty`} value={undefined}/>
                {items.map((item, idx) => {
                    return (
                        <option key={`option_${idx}`} value={getOptionValue(item)}>
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
                    children={options}
                />
            </div>
        </div>
    );
};

export default Select;