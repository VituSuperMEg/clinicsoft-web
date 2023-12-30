import { PlightContainer } from "./styles";

interface IPlight {
  status : string;
}
export function Plight ({
  status
}:IPlight) {

  const statusInformations = {
    0 : 'Online',
    1 : 'Offline',
    2 : 'Ausente',
    3 : 'Indisponível'
  }
  const statusInformationColor = {
    0 : 'text-emerald-500',
    1 : 'text-zinc-500',
    2 : 'text-yellow-500',
    3 : 'text-red-500'
  }
  return (
    <PlightContainer className="bg-slate-50 p-2 clicked">
      <span
       className={`${statusInformationColor[status]}`}
      >{statusInformations[status]}</span>
    </PlightContainer>
  )
}