import { PencilSimple, Scroll } from "@phosphor-icons/react";
import { Table } from "../styles";
import { useLoadData } from "../../../queries/loadData";
import { If } from "../../../helpers/If";

interface IGrid {
  onViewChange: (view: string) => void;
  onEditId: (id: number) => void;
  endPoint: string;
  fiedls: [
    {
      label: string;
      name: string;
    },
  ];
}
export function Grid({ onViewChange, onEditId, endPoint, fiedls }: IGrid) {
  const { data } = useLoadData(endPoint);

  function handleViewCrud(view: string) {
    onViewChange(view);
  }

  return (
    <div className="p-6">
      <If test={data}>
        <Table>
          <thead>
            {fiedls.map((i) => (
              <th className="text-zinc-500">{i.label}</th>
            ))}
            <th className="text-zinc-500">Ações</th>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  {fiedls.map((i) => (
                    <td key={i.name}>{item[i.name]}</td>
                  ))}
                  <td
                    className="bg-emerald-500 mt-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <PencilSimple
                      color="#fff"
                      className="clicked"
                      onClick={() => {
                        handleViewCrud("edit");
                        onEditId(item.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </If>
      <If test={!data}>
        <div className="flex items-center justify-center h-96 flex-col pt-48">
          <Scroll size={40} />
          <br />
          <h2>Sem valores cadastrado!</h2>
          <strong>Para cadastrar clique no botão novo...</strong>
        </div>
      </If>
    </div>
  );
}
