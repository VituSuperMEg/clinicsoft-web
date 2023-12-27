import { ReactNode } from "react";
/* @typescript-eslint/no-explicit-any */
interface IIf<T> {
  children?: ReactNode;
  elseNode?: ReactNode;
  test: T;
}
export function If<T>({
  children, elseNode, test
}:IIf<T>) {
  if (test) {
    return children;
  }
  if(elseNode) {
    return elseNode;
  }
  return null;
}