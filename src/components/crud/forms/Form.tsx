import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { If } from "../../../helpers/If";
import { useEffect, useState } from "react";
import { setorMocks } from "../../../mocks/mocks";
import { api } from "../../../services/api";
import { Messages } from "../../../helpers/messages";

interface IForm {
  initialValues: [];
  children: (formikProps: FormikHelpers<any>) => React.ReactNode;
  view?: string;
  itemId?: number;
  endPoint : string;
}

interface ISetor {
  id : number;
  descricao : string;
  cbo : string;
  quantidade_de_profissionais : string;
}
export function Form({ initialValues, children, view = 'create', itemId, endPoint}: IForm) {

  const msg = new Messages();

  return (
    <>
    <If test={view === 'create'}>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values : any) => {
        await api(`${endPoint}/create`, values);
        msg.success('Registro cadastrado com sucesso!');
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
    {/* <Formik
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
    </Formik> */}
    </If>
    </>
   
  );
}
