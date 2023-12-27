import { Routes, Route } from "react-router-dom";
import { LadingPage } from "../modules/landing-page/LadingPage";
import { Painel } from "../modules/painel/Painel";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<LadingPage />}/>
      <Route path="/painel">
        <Route path="/painel" element={<Painel />} />
      </Route>
    </Routes>
  )
}