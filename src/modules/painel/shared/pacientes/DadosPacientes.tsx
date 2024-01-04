import { If } from "../../../../helpers/If";
import { TabComponent } from "../../../../components/Tab/Tab";
import { formatarCPF, formatarData } from "../../../../helpers/format";
import { InputText } from "../../../../components/inputs/InputText";
import { Field } from "formik";
import { Col, Row } from "react-bootstrap";

import Tab from "react-bootstrap/Tab";
import mulher from "../../../../assets/mulher.png";

export function DadosPacientes({ item }) {
  return (
    <div>
      <If test={item.values.sexo === "F" || item.values.sexo === "M"}>
        <div className="flex items-center gap-3">
          <div
            className="bg-emerald-500 flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          >
            <img src={mulher} width={70} />
          </div>

          <div className="flex flex-col">
            <h4>
              <strong>Nome: </strong>
              {item.values.nome}
            </h4>
            <h6>
              <strong>CPF: </strong>
              {item.values.cpf ? formatarCPF(item.values.cpf) : ""}
            </h6>
            <h6>
              <strong>Data de Nascimento: </strong>
              {item.values.dt_nascimento
                ? formatarData(item.values.dt_nascimento)
                : ""}
            </h6>
            <h6>
              <strong>Rua: </strong> {item.values.rua}, {item.values.numero},{" "}
              {item.values.bairro}.
            </h6>
          </div>
        </div>
        <div className="mb-32">
          <TabComponent defaultTab="dados" className="mt-6">
            <Tab eventKey="dados" title="Dados Básicos">
              <div className="pt-5">
                <Row>
                  <Col>
                    <Field
                      id="nome"
                      name="nome"
                      label="Nome"
                      value={item.values.nome}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                  <Col>
                    <Field
                      id="email"
                      name="email"
                      label="E-mail"
                      value={item.values.email}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                  <Col>
                    <Field
                      id="telefone"
                      name="telefone"
                      label="Telefone"
                      value={item.values.telefone}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Field
                      id="cpf"
                      disabled
                      name="cpf"
                      label="CPF"
                      value={item.values.cpf}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                  <Col>
                    <Field
                      id="rg"
                      name="rg"
                      label="RG"
                      value={item.values.rg}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Field
                      id="rua"
                      name="rua"
                      label="Rua"
                      value={item.values.rua}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                  <Col>
                    <Field
                      id="numero"
                      name="numero"
                      label="Número"
                      value={item.values.numero}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                  <Col>
                    <Field
                      id="bairro"
                      name="bairro"
                      label="Bairro"
                      value={item.values.bairro}
                      component={InputText}
                      onChange={item.handleChange}
                    />
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="medicamentos" title="Medicamentos">
              Medicamentos
            </Tab>
            <Tab eventKey="fila" title="Fila de Espera">
              Minha fila de Espera
            </Tab>
          </TabComponent>
        </div>
      </If>
    </div>
  );
}
