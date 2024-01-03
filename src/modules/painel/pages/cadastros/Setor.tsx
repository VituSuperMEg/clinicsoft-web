import { Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { InputText } from "../../../../components/inputs/InputText";
import { setorMocks } from "../../../../mocks/mocks";

export function Setor() {
  return (
    <div>
      <Crud
        view="list"
        formComponent={(props) => (
          <>
            <Field
              id="descricao"
              name="descricao"
              label="Descrição"
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="cbo"
              name="cbo"
              label="Cbo"
              mask="9999-99"
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="cbo"
              name="cbo"
              label="Cbo"
              mask="9999-99"
              component={InputText}
              onChange={props.handleChange}
            />
          </>
        )}
        initialValues={{
          id: "",
          descricao: "",
          cbo: "",
        }}
      />
    </div>
  );
}
