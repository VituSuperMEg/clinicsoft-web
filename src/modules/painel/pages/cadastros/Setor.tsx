import { ErrorMessage, Field } from "formik";
import { Crud } from "../../../../components/crud/Crud";
import { InputText } from "../../../../components/inputs/InputText";
import * as yup from 'yup';


const setorValidation = yup.object().shape({
  nome :  yup.string().required('Campo Obrigátorio'),
  crm: yup.string().required('Campo Obrigatório').min(7, 'No mínimo 7 caracteres').max(7, 'No máximo 7 caracteres')
})
export function Setor() {
  return (
    <div>
      <Crud
        endPoint="/setor"
        initialValues={{
          nome: "",
          crm: "",
          telefone: "",
          cbo: "",
          especializacao: "",
          setor_id: 1,
        }}
        validation={setorValidation}
        fiedls={[

        ]}
        formComponent={(props) => (
          <>

          </>
        )}
      />
    </div>
  );
}
