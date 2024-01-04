import { Crud } from "../../../../components/crud/Crud";
import { DadosPacientes } from "../../shared/pacientes/DadosPacientes";
import { If } from "../../../../helpers/If";

import * as yup from "yup";

const medicosValidation = yup.object().shape({});
export function Pacientes() {
  return (
    <div>
      <Crud
        initialValues={{
          nome: "",
          dt_nascimento: "",
          email: "",
          cpf: "",
          rg: "",
          rua: "",
          numero: "",
          bairro: "",
        }}
        validation={medicosValidation}
        fiedls={[
          {
            label: "Nome",
            name: "nome",
          },
          {
            label: "CPF",
            name: "cpf",
          },
          {
            label: "RG",
            name: "rg",
          },
          {
            label: "Data de Nascimento",
            name: "dt_nascimento",
          },
          {
            label: "Telefone",
            name: "telefone",
          },
          {
            label: "E-mail",
            name: "email",
          },
          {
            label: "Rua",
            name: "rua",
          },
        ]}
        endPoint="/pacientes"
        formComponent={(props) => (
          <>
            <If test={props.values.nome === ""}>
              <p>novo</p>
            </If>
            <If test={props.values.nome !== ""}>
              <DadosPacientes item={props} />
            </If>
          </>
        )}
      />
    </div>
  );
}
