import { DashBoard } from "../pages/Dashborad";
import { Exames } from "../pages/agendamentos/exames";
import { Retorno } from "../pages/agendamentos/retorno";
import { Medicos } from "../pages/cadastros/Medicos";
import { Pacientes } from "../pages/cadastros/Pacientes";
import { Setor } from "../pages/cadastros/Setor";
import { MaterialEscritorio } from "../pages/estoque/materialEscritorio";
import { Medicamentos } from "../pages/estoque/medicamentos";
import { ProdutosMedicos } from "../pages/estoque/produtosMedicos";
import { FilaDeEspera } from "../pages/relatorios/filaDeEspera";

import { PorEspecialidade } from "../pages/relatorios/porEspecialidade";
import { Procedimentos } from "../pages/relatorios/procedimentos";

export const pages = [
  {
    page: "dashboard",
    component: DashBoard,
  },
  {
    page: "Setor",
    component: Setor,
  },
  {
    page: "medicos",
    component: Medicos,
  },
  {
    page: "pacientes",
    component: Pacientes,
  },
  {
    page : 'Exames',
    component : Exames
  },
  {
    page : "Retorno",
    component : Retorno
  },
  {
    page : "Fila de Espera",
    component : FilaDeEspera
  },
  {
    page : "Por Especialidade",
    component : PorEspecialidade
  },
  {
    page : "Prodecimentos",
    component : Procedimentos
  },
  {
    page : "Medicamentos",
    component : Medicamentos
  },
  {
    page : "Produtos Médicos",
    component : ProdutosMedicos
  },
  {
    page : "Material de Escritório",
    component : MaterialEscritorio
  }
];
