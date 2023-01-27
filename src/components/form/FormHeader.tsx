import React from 'react';

interface FormHeaderProps {
    title?: string | undefined;
    description?: string | undefined;
}

const FormHeader = ({title, description}: FormHeaderProps) => {
    return (
        <div className={'formHeaderWrapper'}>
            {title && <div className={'formHeaderTitle'} children={title}/>}
            {description && <div className={'formHeaderDescription'} children={description}/>}
        </div>
    );
};

export default FormHeader;