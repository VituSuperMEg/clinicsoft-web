import { useState } from "react";
import {
  CaretDown,
  CaretUp,
  FolderPlus,
  House,
  CalendarBlank,
  FileText,
  CurrencyDollar,
  User,
} from "@phosphor-icons/react";

interface IMenu {
  onNavigatePage: (page: string, menu?: string) => void;
}

export function Menu({ onNavigatePage }: IMenu) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [menu, setMenu] = useState("");

  const toggleSubMenu = (menu: string) => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setMenu(menu);
  };

  return (
    <ul className=" w-72 h-screen pl-6 pt-28  flex column justify-between  pb-12 border-top-left">
      <div className="flex column gap-3">
        <li className="clicked w-8" onClick={() => onNavigatePage("dashboard")}>
          <House className="clicked text-emerald-500" size={30} />
        </li>
        <li onClick={() => toggleSubMenu("cadastro")}>
          <span className="flex items-center gap-2">
            <FolderPlus size={30} className="text-emerald-500"/>
            <p >Cadastros</p>
            {" "}
            {!isSubMenuOpen && menu === "cadastro" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "cadastro" && (
            <ul className="p-2">
              <li onClick={() => onNavigatePage("Setor", "Cadastros")}>
                Setor
              </li>
              <li onClick={() => onNavigatePage("medicos", "Cadastros")}>
                Medicos
              </li>
              <li onClick={() => onNavigatePage("pacientes", "Cadastro")}>
                Pacientes
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("agendamentos")}>
          <span className="flex items-center gap-2">
            <CalendarBlank size={30} className="text-emerald-500"/> Agendamentos{" "}
            {!isSubMenuOpen && menu === "agendamentos" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "agendamentos" && (
            <ul className="p-2">
              <li onClick={() => onNavigatePage("Consultas", "Agendamentos")}>
                Consultas
              </li>
              <li onClick={() => onNavigatePage("Exames", "Agendamentos")}>
                Exames
              </li>
              <li onClick={() => onNavigatePage("Retorno", "Agendamentos")}>
                Retorno
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("relatórios")}>
          <span className="flex items-center gap-2">
            <FileText size={30} className="text-emerald-500"/> Relatórios{" "}
            {!isSubMenuOpen && menu === "relatórios" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "relatórios" && (
            <ul className="p-2">
              <li
                onClick={() => onNavigatePage("Relatórios", "Fila de Espera")}
              >
                Fila de Espera
              </li>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Por Especialidade
              </li>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Procedimenentos
              </li>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Exames
              </li>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Retorno
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("estoque")}>
          <span className="flex items-center gap-2">
            <FolderPlus size={30} className="text-emerald-500"/> Estoque{" "}
            {!isSubMenuOpen && menu === "estoque" ? <CaretDown /> : <CaretUp />}{" "}
          </span>
          {isSubMenuOpen && menu === "estoque" && (
            <ul className="p-2">
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Medicamentos
              </li>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Produtos Medicos
              </li>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Matéria de Escritório
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("financeiro")}>
          <span className="flex items-center gap-2">
            <CurrencyDollar size={30} className="text-emerald-500"/> Financeiro{" "}
            {!isSubMenuOpen && menu === "usuarios" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "financeiro" && (
            <ul className="p-2">
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Redimentos
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("usuarios")}>
          <span className="flex items-center gap-2">
            <User size={30} className="text-emerald-500"/> Autorizações{" "}
            {!isSubMenuOpen && menu === "usuarios" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "usuarios" && (
            <ul className="p-2">
              <li onClick={() => onNavigatePage("Usuários", "Autorizações")}>
                Usuários
              </li>
            </ul>
          )}
        </li>
      </div>
    </ul>
  );
}
