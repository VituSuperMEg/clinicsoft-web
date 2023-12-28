import { ArrowRight, CalendarBlank, FolderPlus } from "@phosphor-icons/react";
import { If } from "../../helpers/If";

interface IBread {
  menu : string;
  page : string;
}
export function Breadcrumbs({ menu, page }:IBread) {
  return (
    <div className="flex gap-2 items-center p-3">
       <If test={menu === 'Cadastros'}>
       <FolderPlus size={20} />
      </If>
      <If test={menu === 'Agendamentos'}>
       <CalendarBlank size={20}/>
      </If>
      <ArrowRight />
      <h2>{menu}</h2>
      <ArrowRight />
      <h2>{page}</h2>
    </div>
  )
}