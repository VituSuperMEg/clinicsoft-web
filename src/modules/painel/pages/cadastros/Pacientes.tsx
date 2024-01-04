import { Crud } from "../../../../components/crud/Crud";
import { DadosPacientes } from "../../shared/pacientes/DadosPacientes";
import { If } from "../../../../helpers/If";
import { useState } from "react";
import * as yup from "yup";
import { Col, Row } from "react-bootstrap";
import { InputText } from "../../../../components/inputs/InputText";
import { ErrorMessage, Field } from "formik";
import { InputDate } from "../../../../components/inputs/InputDate";

const medicosValidation = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
});
export function Pacientes() {

  const [view, setView] = useState('edit');

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
        onView={setView}
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
            <If test={view === 'create'}>
              <Row>
                <Col>
                  <Field
                    autofocus
                    id="nome"
                    name="nome"
                    required="required"
                    label="Nome"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="nome" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="email"
                    name="email"
                    required="required"
                    label="E-mail"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="email" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="telefone"
                    name="telefone"
                    required="required"
                    label="Telefone"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="telefone" />}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    id="cpf"
                    name="cpf"
                    required="required"
                    label="CPF"
                    mask="999.999.999-99"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="cpf" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="rg"
                    name="rg"
                    required="required"
                    label="RG"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="rg" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="sexo"
                    name="sexo"
                    required="required"
                    label="Sexo"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="sexo" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="dt_nascimento"
                    name="dt_nascimento"
                    required="required"
                    label="Data de Nascimento"
                    component={InputDate}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="dt_nascimento" />}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    id="rua"
                    name="rua"
                    required="required"
                    label="Rua"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="rua" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="numero"
                    name="numero"
                    required="required"
                    label="Número da Casa"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="numero" />}
                  />
                </Col>
                <Col>
                  <Field
                    id="bairro"
                    name="bairro"
                    required="required"
                    label="Bairro"
                    component={InputText}
                    onChange={props.handleChange}
                    messageErros={<ErrorMessage name="bairro" />}
                  />
                </Col>
              </Row>
            </If>
            <If test={view === 'edit'}>
              <DadosPacientes item={props} />
            </If>
          </>
        )}
      />
    </div>
  );
}
