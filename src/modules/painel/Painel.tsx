import { Login } from "./pages/Login";
import { If } from "../../helpers/If";
import { PainelRouter } from "./routes/PainelRouter";
import { useUser } from '../../state/auth';
import { useState, useEffect } from 'react';

export function Painel() {

  // zustand
  const isAuthenticated = useUser(state => state.isAuthenticated)

  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    setAuthentication(isAuthenticated)
  }, [isAuthenticated]);


  return (
    <div className="bg-primary-css h-screen w-screen">
      <If test={authentication}>
        <PainelRouter />
      </If>
      <If test={!authentication}>
        <Login />
      </If>
    </div>
  );
}
