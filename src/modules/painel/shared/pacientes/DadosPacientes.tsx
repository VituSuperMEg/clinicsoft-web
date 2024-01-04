import { If } from "../../../../helpers/If";
import mulher from '../../../../assets/mulher.jpeg';
import { TabComponent } from "../../../../components/Tab/Tab";
import Tab from 'react-bootstrap/Tab';
import { formatarCPF, formatarData } from "../../../../helpers/format";

export function DadosPacientes({item}) {

  const filaExists = true;

  return (
    <div>
      <If test={item.values.sexo === 'F'}>
        <div className="flex items-center">
          <img src={mulher} width={150} />
          <div className="flex flex-col">
           <h5>Nome : {item.values.nome}</h5>
           <strong>CPF : {item.values.cpf ? formatarCPF(item.values.cpf) : ''}</strong>
           <h6>Data de Nascimento : {item.values.dt_nascimento ? formatarData(item.values.dt_nascimento) : ''}</h6>
           <h6>Rua : {item.values.rua}, {item.values.numero}, {item.values.bairro}.</h6>
          </div>
        </div>
      </If>
      <If test={filaExists}>
        <div className="mb-32">
        <TabComponent defaultTab="medicamentos" className="mt-6">
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
  )
}
