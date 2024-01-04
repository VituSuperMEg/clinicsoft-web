import { ReactNode, useState } from "react";
import { Buttons } from "./buttons/Buttons";
import { If } from "../../helpers/If";
import { Grid } from "./grid/Grid";
import { Form } from "./forms/Form";
import * as yup from 'yup';

interface ICrud {
  view: string;
  formComponent: (formikProps: any) => ReactNode;
  initialValues: any;
  endPoint: string;
  fiedls: [
    {
      name: string;
      label: string;
    },
  ];
  validation: (yup: typeof yup) => yup.ObjectSchema<Partial<any>>;
  onView : (view : string) => void;
}
export function Crud({
  view = 'list',
  initialValues,
  formComponent,
  endPoint,
  fiedls,
  validation,
  onView
}: ICrud) {

  const [viewPage, setViewPage] = useState(view);

  const [idItem, setIdItem] = useState(0);

  function handleAlterCrudPage(view: string) {
    setViewPage(view);
    onView(view)
  }

  return (
    <div>
      <Buttons view={viewPage} onViewChange={handleAlterCrudPage} />
      <If test={viewPage === "list"}>
        <Grid
          endPoint={endPoint}
          fiedls={fiedls}
          onEditId={setIdItem}
          onViewChange={handleAlterCrudPage}
        />
      </If>
      <If test={viewPage === "create"}>
        <Form
          validation={validation}
          endPoint={endPoint}
          initialValues={initialValues}
          children={formComponent}
          onAlterPage={handleAlterCrudPage}
        />
      </If>
      <If test={viewPage === "edit"}>
        <Form
          validation={validation}
          view="edit"
          endPoint={endPoint}
          onAlterPage={handleAlterCrudPage}
          itemId={idItem}
          initialValues={initialValues}
          children={formComponent}
        />
      </If>
    </div>
  );
}
