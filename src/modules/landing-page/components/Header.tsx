import { User } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="p-6 flex items-center justify-between">
      <strong className="text-2xl text-emerald-800">ClinicSoft</strong>
      <ul className="flex gap-5 items-center">
        <a href="#" className="bg-emerald-800 p-2 rounded-md text-slate-50">
          Planos
        </a>
        <a href="#" className="text-slate-900">
          Início
        </a>
        <a href="#" className="text-slate-900">
          Vantagens
        </a>
        <a href="#" className="text-slate-900">
          Vantagens
        </a>
        <a href="#" className="text-slate-900">
          Sobre
        </a>
        <NavLink
          to="/painel"
          className="text-emerald-800 border border-emerald-800 rounded-md p-2 flex items-center gap-2 hover:bg-emerald-800 hover:text-white ease-in duration-300"
        >
          <User />
          Área do Cliente
        </NavLink>
      </ul>
    </div>
  );
}
