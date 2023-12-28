interface IMenu {
  onNavigatePage : (page : string) => void;
}
export function Menu({
  onNavigatePage
}:IMenu) {

  return (
    <ul className="bg-white  w-72 h-screen shadow">
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
