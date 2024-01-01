import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { If } from "../../../helpers/If";
import { useEffect, useState } from "react";
import { setorMocks } from "../../../mocks/mocks";

interface IForm {
  initialValues: [];
  children: (formikProps: FormikHelpers<any>) => React.ReactNode;
  view?: string;
  itemId?: number;
}

interface ISetor {
  id : number;
  descricao : string;
  cbo : string;
  quantidade_de_profissionais : string;
}
export function Form({ initialValues, children, view = 'create', itemId}: IForm) {

  const [item, setItem] = useState({} as ISetor);
  
  useEffect(() => {
    if(itemId) {
      let id = itemId;
      if(itemId === 1) {
        id = 0;
      }else if(itemId === 2) {
        id = 1;
      }
      setItem(setorMocks[id]);
    }
  }, [itemId]);
  
  return (
    <>
    <If test={view === 'create'}>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikProps) => (
        <FormikForm onSubmit={formikProps.handleSubmit} className="p-5">
          {children(formikProps)}
          <div className="left">
            <button className="" type="submit">
              Salvar
            </button>
            <button className="" type="reset">
              Cancelar
            </button>
            <button className="" type="submit">
              Excluir
            </button>
          </div>
        </FormikForm>
      )}
    </Formik>
    </If>
    <If test={view === 'edit'}>
    <Formik
      initialValues={item}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikProps) => (
        <FormikForm onSubmit={formikProps.handleSubmit} className="p-5">
          {children(formikProps)}
          <div className="left">
            <button className="" type="submit">
              Salvar
            </button>
            <button className="" type="reset">
              Cancelar
            </button>
            <button className="" type="submit">
              Excluir
            </button>
          </div>
        </FormikForm>
      )}
    </Formik>
    </If>
    </>
   
  );
}
