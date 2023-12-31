import { ReactNode, useState } from "react"
import { Buttons } from "./buttons/Buttons"
import { If } from "../../helpers/If";
import { Grid } from "./grid/Grid";
import { Form } from "./forms/Form";

interface ICrud {
  view : string,
  formComponent : (formikProps: any) => ReactNode,
  initialValues : any,
}
export function Crud ({
  view,
  initialValues,
  formComponent,
}:ICrud) {
  
  const [viewPage, setViewPage] = useState(view);
  const [idItem, setIdItem] = useState(0);

  function handleAlterCrudPage(view : string) {
     setViewPage(view);
  }
  return ( 
    <div>
      <Buttons 
        view={viewPage} 
        onViewChange={handleAlterCrudPage}
      />
      <If test={viewPage === 'list'}>
       <Grid
        onEditId={setIdItem}
        onViewChange={handleAlterCrudPage}
       />
      </If>
      <If test={viewPage === 'create'}>
        <Form 
         initialValues={initialValues}
         children={formComponent}
        />
      </If>
      <If test={viewPage === 'edit'}>
        <p>editando um item</p>
        <p>{idItem}</p>
      </If>
    </div>
  )
}