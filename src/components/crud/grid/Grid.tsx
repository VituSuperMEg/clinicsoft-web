import { Pencil } from "@phosphor-icons/react";
import { setorMocks } from "../../../mocks/mocks";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface IGrid {
  onViewChange: (view: string) => void;
  onEditId: (id: number) => void;
  endPoint : string
}
export function Grid({ onViewChange, onEditId, endPoint}: IGrid) {

  const [data, setData] = useState([]);
  
  function handleViewCrud(view: string) {
    onViewChange(view);
  }

  useEffect(() => {
     async function loadData() {
       const response = await api.get(`${endPoint}`);
       setData(response.data)
     }
     loadData();
  }, []);

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
          {data.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.nome}</td>
              <td>{data.cbo}</td>
              <td></td>
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