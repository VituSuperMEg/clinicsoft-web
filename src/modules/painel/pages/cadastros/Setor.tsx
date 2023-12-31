import { Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { InputText } from "../../../../components/inputs/InputText";

export function Setor() {
  return (
    <div>
      <Crud
        view="list"
        formComponent={(props) => (
          <>
            <Field
              id="descricao"
              name="descricao"q
              label="Descrição"
              component={InputText}
              onChange={props.handleChange}
            />
            <button type="submit">Salvar</button>
          </>
        )}
        initialValues={{
          id: "",
          descricao: "",
          cbo : ""
        }}
      />
    </div>
  );
}
