import { PencilSimple, Scroll, Trash } from "@phosphor-icons/react";
import { Table } from "../styles";
import { useLoadData } from "../../../queries/loadData";
import { If } from "../../../helpers/If";
import { Messages } from "../../../helpers/messages";
import { api } from "../../../services/api";
import { queryClient } from "../../../services/queryClient";
import { formatarCPF, formatarData } from "../../../helpers/format";

interface IGrid {
  onViewChange: (view: string) => void;
  onEditId: (id: number) => void;
  onDeleteId: (id: number) => void;
  endPoint: string;
  fiedls: [
    {
      label: string;
      name: string;
    },
  ];
}
export function Grid({ onViewChange, onEditId, endPoint, fiedls }: IGrid) {
  const msg = new Messages();

  const { data, refetch } = useLoadData(endPoint);

  function handleViewCrud(view: string) {
    onViewChange(view);
  }
  async function handleRemove(itemId: number) {
    const check = await msg.confirmationDeleteReturn(
      "Tem certeza de que deseja excluir este item?",
    );
    if (check) {
      api.delete(`${endPoint}/${itemId}/`);
      queryClient.invalidateQueries(["data", { endPoint }]);
      refetch();
      msg.success("Registro excluído com sucesso!");
    }
  }
  return (
    <div className="p-6">
      <If test={data}>
        <Table>
          <thead>
            {fiedls.map((i) => (
              <th className="text-zinc-500">{i.label}</th>
            ))}
            <th className="text-zinc-500 float-right mr-8">Ações</th>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  {fiedls.map((i) => (
                    <td key={i.name}>
                      {i.name === "cpf"
                        ? formatarCPF(item[i.name])
                        : i.name === "dt_nascimento"
                          ? formatarData(item[i.name])
                          : item[i.name]}
                    </td>
                  ))}
                  <div className="flex float-right gap-2">
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
                    <td
                      className="bg-red-500 mt-2"
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <Trash
                        color="#fff"
                        className="clicked"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      />
                    </td>
                  </div>
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
