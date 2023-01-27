import React from 'react';
import './styles.css';
interface TextFiledProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string | undefined
}

const TextFiled = ({label, className, ...props}: TextFiledProps) => {
    return (
      <div className={[className, 'formInputWrapper'].join(' ')}>
          {label && <div className={'formLabel'} children={label}/>}
          <div className={'formInputContainer'}>
              <input className={'formInput'} {...props} />
          </div>
      </div>
    );
};

export default TextFiled;