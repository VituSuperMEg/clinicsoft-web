import { Pencil } from "@phosphor-icons/react";
import { setorMocks } from "../../../mocks/mocks";

interface IGrid {
  onViewChange: (view: string) => void;
  onEditId: (id: number) => void;
}
export function Grid({ onViewChange, onEditId }: IGrid) {
  function handleViewCrud(view: string) {
    onViewChange(view);
  }
  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Descrição</th>
          <th>CBO</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {setorMocks.map((setor) => (
            <tr>
              <td>{setor.id}</td>
              <td>{setor.descricao}</td>
              <td>{setor.cbo}</td>
              <td>{setor.quantidade_de_profissionais}</td>
              <td>
                <Pencil
                  onClick={() => {
                    handleViewCrud("edit");
                    onEditId(setor.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
