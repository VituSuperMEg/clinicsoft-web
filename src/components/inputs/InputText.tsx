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
  className,
  inputStyle,
  ...props
}: IInput) => {
  return (
    <div className={`${className}`}>
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
        className={`form-control ${inputStyle}`}
        autoFocus={autofocus}
        {...props}
      />
      <span style={{ color: 'red' }}>{messageErros}</span>
    </div>
  );
};
