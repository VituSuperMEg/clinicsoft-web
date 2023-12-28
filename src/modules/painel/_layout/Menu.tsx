// Menu.jsx
import { NavLink, useNavigate, Link } from "react-router-dom";

interface IMenu {
  onNavigatePage : (page : string) => void;
}
export function Menu({
  onNavigatePage
}:IMenu) {
  
  return (
    <ul className="bg-emerald-800 w-72 h-screen">
      <li onClick={() => onNavigatePage('dashboard')}>
        Dashboard
      </li>
      <li onClick={() => onNavigatePage('setor')}>
        Setor
      </li>
      <li onClick={() => onNavigatePage('medicos')}>
        Medicos
      </li>
    </ul>
  );
}
