import { Login } from "./pages/Login";
import { If } from "../../helpers/If";
import { PainelRouter } from "./routes/PainelRouter";

export function Painel() {
  const authentication = false;
  return (
    <div className="bg-slate-200 h-screen w-screen">
      <If test={authentication}>
        <PainelRouter />
      </If>
      <If test={!authentication}>
        <Login />
      </If>
    </div>
  );
}
