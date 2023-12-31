import { CaretRight, CalendarBlank, FolderPlus } from "@phosphor-icons/react";
import { If } from "../../helpers/If";

interface IBread {
  menu : string;
  page : string;
}
export function Breadcrumbs({ menu, page }:IBread) {
  return (
    <div className="flex gap-2 items-center pr-6 pt-2 left">
       <If test={menu === 'Cadastros'}>
       <FolderPlus size={20} />
      </If>
      <If test={menu === 'Agendamentos'}>
       <CalendarBlank size={20}/>
      </If>
      <CaretRight />
      <h2>{menu}</h2>
      <CaretRight />
      <h2>{page}</h2>
    </div>
  )
}