import { Formik, Form as FormikForm,FormikHelpers  } from "formik";

interface IForm {
  initialValues: [];
  children: (formikProps: FormikHelpers<any>) => React.ReactNode;
}

export function Form({ initialValues, children}: IForm) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikProps) => (
        <FormikForm onSubmit={formikProps.handleSubmit}>
          {children(formikProps)}
        </FormikForm>
      )}
    </Formik>
  );
}
