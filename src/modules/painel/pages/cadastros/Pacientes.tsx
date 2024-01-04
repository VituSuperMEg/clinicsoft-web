import { ErrorMessage, Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { InputText } from "../../../../components/inputs/InputText";
import * as yup from 'yup';
import { DadosPacientes } from "../../shared/pacientes/DadosPacientes";


const medicosValidation = yup.object().shape({
  nome :  yup.string().required('Campo Obrigátorio'),
  crm: yup.string().required('Campo Obrigatório').min(7, 'No mínimo 7 caracteres').max(7, 'No máximo 7 caracteres')
})
export function Pacientes() {
  return (
    <div>
      <Crud
        initialValues={{
          nome: "",
        }}
        validation={medicosValidation}
        fiedls={[
          {
            label: "Nome",
            name: "nome",
          },
          {
            label : 'CPF',
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
            <DadosPacientes
              item={props}
            />
          </>
        )}
      />
    </div>
  );
}
