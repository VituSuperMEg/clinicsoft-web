import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/Dashborad";
import { Layout } from "../_layout/Layout";

export function PainelRouter() {
  return (
    <Routes>
     <Route path="/" element={<Layout />}>
        <Route path="/" element={<DashBoard />} />
     </Route>
    </Routes>
  );
}
