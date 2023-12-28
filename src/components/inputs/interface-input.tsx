export interface IInput  {
  name: string;
  label: string;
  maskField?:  string | (string | RegExp)[];
  required?: 'required' | string;
  messageErros?: string;
  autofocus?: boolean;
  next?: boolean;
  className: string;
  inputStyle?: string;
}
