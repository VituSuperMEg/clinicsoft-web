import { useState } from "react";
import {
  CaretDown,
  CaretUp,
  FolderPlus,
  HouseSimple,
  CalendarBlank,
  FileText,
  CurrencyDollar,
  User,
  SignOut,
} from "@phosphor-icons/react";
import * as Avatar from "@radix-ui/react-avatar";

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
    <ul className="bg-white w-72 h-screen shadow pt-28  flex column justify-between pb-12 border-top-left">
      <div>
        <li className="clicked" onClick={() => onNavigatePage("dashboard")}>
          <HouseSimple size={30} />
        </li>
        <li onClick={() => toggleSubMenu("cadastro")}>
          <span className="flex items-center gap-2">
            <FolderPlus size={30} /> Cadastros{" "}
            {!isSubMenuOpen && menu === "cadastro" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "cadastro" && (
            <ul>
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
            <CalendarBlank size={30} /> Agendamentos{" "}
            {!isSubMenuOpen && menu === "agendamentos" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "agendamentos" && (
            <ul>
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
            <FileText size={30} /> Relatórios{" "}
            {!isSubMenuOpen && menu === "relatórios" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "relatórios" && (
            <ul>
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
            <FolderPlus size={30} /> Estoque{" "}
            {!isSubMenuOpen && menu === "estoque" ? <CaretDown /> : <CaretUp />}{" "}
          </span>
          {isSubMenuOpen && menu === "estoque" && (
            <ul>
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
            <CurrencyDollar size={30} /> Financeiro{" "}
            {!isSubMenuOpen && menu === "usuarios" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "financeiro" && (
            <ul>
              <li onClick={() => onNavigatePage("Relatórios", "Agendamentos")}>
                Redimentos
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("usuarios")}>
          <span className="flex items-center gap-2">
            <User size={30} /> Autorizações{" "}
            {!isSubMenuOpen && menu === "usuarios" ? (
              <CaretDown />
            ) : (
              <CaretUp />
            )}{" "}
          </span>
          {isSubMenuOpen && menu === "usuarios" && (
            <ul>
              <li onClick={() => onNavigatePage("Usuários", "Autorizações")}>
                Usuários
              </li>
            </ul>
          )}
        </li>
      </div>
      <div>
        <Avatar.Root className="rounded-sm">
          <Avatar.Image src="https://avatars.githubusercontent.com/u/67121891?v=4" width={50} height={50}  className="AvatarImage"/>
          <Avatar.Fallback />
        </Avatar.Root>
        <SignOut size={30} />
      </div>
    </ul>
  );
}
