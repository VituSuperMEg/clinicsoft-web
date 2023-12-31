import { Plus } from "@phosphor-icons/react"
import { If } from "../../../helpers/If"

interface IButtons {
  view : string;
  onViewChange : (view : string) => void;
} 
export function Buttons ({
  view,
  onViewChange
}:IButtons) {

  function handleViewChange (view : string) {
    if (view === 'list') {
      onViewChange('create')
    }else if(view === 'create') {
      onViewChange('list')
    }else {
      onViewChange('list')
    }
  }
  return (
    <div className="left pr-5 mt-4">
      <button 
       className="btn-crud"
       onClick={
        () => handleViewChange(view)
       }
      >
        <If test={view === 'list'}>
          <Plus className="text-white"/>
          <strong className="text-white">Novo</strong>
        </If>
        <If test={view === 'create' || view === 'edit'}>
          <strong className="text-white">Voltar</strong>
        </If>
      </button>
    </div>
  )
}