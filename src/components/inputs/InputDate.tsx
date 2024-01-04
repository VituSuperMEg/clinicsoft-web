
import { If } from "../../helpers/If";
import { IInput } from "./interface-input";

export const InputDate = ({
  name,
  label,
  required,
  messageErros,
  autofocus,
  inputStyle,
  className,
  ...props
}:IInput) => {
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
      <input
        name={name}
        className={`form-control ${inputStyle}`}
        autofocus={autofocus}
        type="date"
        style={{padding: '0.2rem 0.8rem !important'}}
        {...props}
      />
      <span style={{ color: 'red' }}>{messageErros}</span>
    </div>
  );
};
