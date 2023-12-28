import { User, Heartbeat } from "@phosphor-icons/react";
import { CardValue } from "../../../components/cardvalue/CardValue";

export function DashBoard () {
  return (
    <div className="m-5">
      <CardValue 
       title="Usuários"
       directIconAndAmount="row"
       amount={50}
       className="bg-emerald-300 w-64 rounded-md"
       icon={<User size={50}/>}
      />
      <CardValue 
       amount={800}
       title="Pacientes Atendidos"
       className="bg-emerald-300 w-64 rounded-md"
       icon={<Heartbeat size={50} />}
       currentDate={true}
      />
    </div>
  )
}