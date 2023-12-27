import { InputText } from "../../../components/inputs/InputText";
import { WeekColor } from "../components/WeekColor";

export function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="login-blur"></div>
      <div className="glass">
        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="form w-5/6 flex items-center justify-center flex-col gap-8 mt-4 p-5">
          <div className="start column m-s-150">
           <h2 className="text-5xl text-emerald-800">Login</h2>
           <p className="text-zinc-500 mt-5">Para acessar o sistema, entre com seu cpf e sua senha!</p>
          </div>
            <InputText 
              label="Login" 
              name="Login" 
              required="required" 
              className="w-3/4"
              inputStyle=""
            />
            <InputText label="Senha" name="Login" className="w-3/4" required="required"/>
            <button className="bg-emerald-800 p-5 text-white rounded-md w-4/6 hover:bg-emerald-700">Entrar</button> 
          </div>
        </div>
        <div className="flex-1">
          <WeekColor  />
        </div>
      </div>
    </div>
  );
}
