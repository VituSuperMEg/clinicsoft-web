import { PencilSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Table } from "../styles";

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
    <div className="p-6">
      <Table>
        <thead>
          {fiedls.map(i => (
            <th className="text-zinc-500">{i.label}</th>
          ))}
           <th className="text-zinc-500">Ações</th>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              {fiedls.map(i => (
                <td>{data[i.name]}</td>
              ))}
              <td 
               className="bg-emerald-500 mt-2"
               style={{
                 width: '50px',
                 height: '50px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 borderRadius : '50%'
               }}
              >
                <PencilSimple
                  color="#000"
                  className="clicked"
                  onClick={() => {
                    handleViewCrud("edit");
                    onEditId(data.id);
                  }}
                />

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}