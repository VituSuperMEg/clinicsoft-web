import React from 'react';
import InputMask from 'react-input-mask';
import { IInput } from './interface-input';
import NextInput from '../../helpers/NextInput';
import { If } from '../../helpers/If';

export const InputText = ({
  name,
  label,
  maskField,
  required,
  messageErros,
  autofocus,
  next,
  ...props
}: IInput) => {
  return (
    <div className={`form-group`}>
      <If test={label !== undefined}>
        <label htmlFor={name}>
          {label}
          <If test={required === 'required'}>
            <span className="required"> *</span>
          </If>
        </label>
      </If>
      {next && <NextInput />} 
      <InputMask
        name={name}
        mask={maskField}
        className={`form-control ${next ? 'next' : ''}`}
        autoFocus={autofocus}
        {...props}
      />
      <span style={{ color: 'red' }}>{messageErros}</span>
    </div>
  );
};
