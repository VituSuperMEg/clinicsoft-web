import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { If } from "../../../helpers/If";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Messages } from "../../../helpers/messages";
import * as yup from 'yup';

interface IForm {
  initialValues: [];
  children: (formikProps: FormikHelpers<any>) => React.ReactNode;
  view?: string;
  itemId?: number;
  endPoint: string;
  onAlterPage : (view : string) => void
  validation: (yup: typeof yup) => yup.ObjectSchema<Partial<FormValues>>;
}
export function Form({
  initialValues,
  children,
  view = "create",
  itemId,
  endPoint,
  onAlterPage,
  validation
}: IForm) {
  const [item, setItem] = useState([]);
  const msg = new Messages();

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`${endPoint}/${itemId}`);
      setItem(response.data);
    }
    loadData();
  }, [itemId]);

  async function remove() {
     const check = await msg.confirmationDeleteReturn('Tem certeza de que deseja excluir este item?');
     if(check) {
       api.delete(`${endPoint}/${itemId}/`);
       msg.success("Registro excluído com sucesso!");
       setInterval(() => {
        onAlterPage('list');
       }, 1000);   
    }
  }
  return (
    <>
      <If test={view === "create"}>
        <Formik
          validationSchema={validation}
          initialValues={initialValues}
          onSubmit={async (values: any) => {
            await api.post(`${endPoint}-create/`, values);
            msg.success("Registro cadastrado com sucesso!");
          }}
        >
          {(formikProps) => (
            <FormikForm onSubmit={formikProps.handleSubmit} className="p-5">
              {children(formikProps)}
              <div className="left mt-3 gap-2">
                <button className="bg-emerald-500 p-3 text-white rounded-md hover:opacity-90" type="submit">
                  Salvar
                </button>
                <button className="bg-red-500 p-3 text-white rounded-md hover:opacity-90" type="reset">
                  Cancelar
                </button>
              </div>
            </FormikForm>
          )}
        </Formik>
      </If>
      <If test={view === "edit"}>
        <Formik
          initialValues={item}
          enableReinitialize
          validationSchema={validation}
          onSubmit={async (values) => {
            await api.put(`${endPoint}/${itemId}/`,values);
            msg.success("Registro alterado com sucesso!");
          }}
        >
          {(formikProps) => (
            <FormikForm onSubmit={formikProps.handleSubmit} className="p-5">
              {children(formikProps)}
              <div className="left">
                <button className="bg-emerald-800 p-3 text-white rounded-md hover:opacity-90" type="submit">
                  Salvar
                </button>
                <button className="bg-red-800 p-3 text-white rounded-md hover:opacity-90" type="button" onClick={() => remove()}>
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
