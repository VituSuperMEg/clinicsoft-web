import { Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { Messages } from "../../../../helpers/messages";
import { InputText } from "../../../../components/inputs/InputText";

export function Medicos() {
  const msg = new Messages();

  return (
    <div>
     <Crud
        view="list"
        endPoint="/medicos"
        formComponent={(props) => (
          <>
            <Field
              id="nome"
              name="nome"
              label="Nome"
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="crm"
              name="crm"
              label="CRM"
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
              id="telefone"
              name="telefone"
              label="Telefone"
              component={InputText}
              onChange={props.handleChange}
            />
             <Field
              id="especializacao"
              name="especializacao"
              label="Especialização"
              component={InputText}
              onChange={props.handleChange}
            />
          </>
        )}
        initialValues={{
          nome: "",
          crm: "",
          telefone: "",
          cbo :"",
          especializacao : "",
          setor_id : 1
        }}
      />
    </div>
  );
}
