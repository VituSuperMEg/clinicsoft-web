import { Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { InputText } from "../../../../components/inputs/InputText";

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
        view="list"
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
              label="Nome"
              value={props.values.nome}
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="crm"
              name="crm"
              label="CRM"
              value={props.values.crm}
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="cbo"
              name="cbo"
              label="Cbo"
              value={props.values.cbo}
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="telefone"
              name="telefone"
              value={props.values.telefone}
              label="Telefone"
              component={InputText}
              onChange={props.handleChange}
            />
            <Field
              id="especializacao"
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
