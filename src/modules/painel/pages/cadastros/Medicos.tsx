import { ErrorMessage, Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { InputText } from "../../../../components/inputs/InputText";
import * as yup from 'yup';


const medicosValidation = yup.object().shape({
  nome :  yup.string().required('Campo Obrigátorio'),
  crm: yup.string().required('Campo Obrigatório').min(7, 'No mínimo 7 caracteres').max(7, 'No máximo 7 caracteres')
})
export function Medicos() {
  return (
    <div>
      <Crud
        initialValues={{
          nome: "",
          crm: "",
          telefone: "",
          cbo: "",
          especializacao: "",
          setor_id: 1,
        }}
        validation={medicosValidation}
        fiedls={[
          {
            label: "CRM",
            name: "crm",
          },
          {
            label: "Nome",
            name: "nome",
          },
          {
            label: "CBO",
            name: "cbo",
          },
          {
            label: "Telefone",
            name: "telefone",
          },
          {
            label: "Especialização",
            name: "especializacao",
          },
        ]}
        endPoint="/medicos"
        formComponent={(props) => (
          <>
            {console.log(props)}
            <Field
              id="nome"
              name="nome"
              required="required"
              label="Nome"
              value={props.values.nome}
              component={InputText}
              onChange={props.handleChange}
              messageErros={<ErrorMessage name="nome"/>}
            />
            <Field
              id="crm"
              name="crm"
              required="required"
              label="CRM"
              value={props.values.crm}
              component={InputText}
              onChange={props.handleChange}
              messageErros={<ErrorMessage name="crm"/>}
            />
            <Field
              id="cbo"
              name="cbo"
              required="required"
              label="Cbo"
              value={props.values.cbo}
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="telefone"
              name="telefone"
              required="required"
              value={props.values.telefone}
              label="Telefone"
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="especializacao"
              required="required"
              name="especializacao"
              label="Especialização"
              value={props.values.especializacao}
              component={InputText}
              onChange={props.handleChange}
            />
          </>
        )}
      />
    </div>
  );
}
