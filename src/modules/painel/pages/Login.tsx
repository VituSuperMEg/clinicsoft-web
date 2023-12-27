import { InputText } from "../../../components/inputs/InputText";

export function Login () {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-xls shadow-md h-5/6 w-4/6 flex">
        <div className="flex-1 flex items-center justify-center flex-col">
          <h2>Login</h2>
          <div className=" w-5/6 flex items-center justify-center flex-col gap-8 mt-4 p-5">
            <InputText 
             label="Login"
             name="Login"
            />
           <InputText 
             label="Senha"
             name="Login"
            />
            {/* <button className="bg-emerald-800 p-5 text-white rounded-md w-4/6">Entrar</button> */}
          </div>
        </div>
        <div className="bg-lime-800 flex-1">
        
        </div>
      </div>
    </div>
  )
}