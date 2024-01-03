import { Pencil } from "@phosphor-icons/react";
import { setorMocks } from "../../../mocks/mocks";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface IGrid {
  onViewChange: (view: string) => void;
  onEditId: (id: number) => void;
  endPoint : string,
  fiedls : [{
    label : string
    name : string
  }]
}
export function Grid({ onViewChange, onEditId, endPoint, fiedls}: IGrid) {

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
          {fiedls.map(i => (
            <th>{i.label}</th>
          ))}
           <th>Ações</th>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              {fiedls.map(i => (
                <td>{data[i.name]}</td>
              ))}
              <td>
                <Pencil
                  onClick={() => {
                    handleViewCrud("edit");
                    onEditId(data.id);
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