import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/Dashborad";
import { Layout } from "../_layout/Layout";
import { Setor } from "../pages/Setor";

export function PainelRouter() {
  return (
    <Routes>
      <Route  element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path="setor" element={<Setor />} />
        {/* Adicione outras rotas conforme necessário */}
      </Route>
    </Routes>
  );
}
