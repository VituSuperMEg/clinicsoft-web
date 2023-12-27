
export interface IInput {
  name: string;
  label: string;
  maskField?:  string | (string | RegExp)[];
  required?: string;
  messageErros?: string;
  autofocus?: boolean;
  next?: boolean;
}
