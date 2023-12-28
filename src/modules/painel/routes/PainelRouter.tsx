import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/Dashborad";
import { Layout } from "../_layout/Layout";

export function PainelRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashBoard />} />
        {/* Adicione outras rotas conforme necessário */}
      </Route>
    </Routes>
  );
}
