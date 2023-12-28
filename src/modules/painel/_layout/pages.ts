import { DashBoard } from "../pages/Dashborad";
import { Exames } from "../pages/agendamentos/exames";
import { Medicos } from "../pages/cadastros/Medicos";
import { Setor } from "../pages/cadastros/Setor";

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
    page : 'Exames',
    component : Exames
  }
];
