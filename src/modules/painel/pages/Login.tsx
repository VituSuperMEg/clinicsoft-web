import { InputText } from "../../../components/inputs/InputText";
import { api } from "../../../services/api";
import { WeekColor } from "../components/WeekColor";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginValidation = yup.object().shape({
  cpf: yup.string().required("Informe o número do cpf"),
  password: yup.string().required("Informe sua senha"),
});
export function Login() {
  const emptyObject = {
    cpf: "",
    password: "",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="login-blur"></div>
      <div className="glass">
        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="form w-5/6 flex items-center justify-center flex-col gap-8 mt-4 p-5">
            <div className="start column m-s-150">
              <h2 className="text-5xl text-emerald-800">Login</h2>
              <p className="text-zinc-500 mt-5">
                Para acessar o sistema, entre com seu cpf e sua senha!
              </p>
            </div>
            <Formik
              initialValues={emptyObject}
              validationSchema={LoginValidation}
              onSubmit={async (values) => {
                 const response = await api.post('/login/', values);
              }}
            >
              {({ handleChange, handleSubmit }) => (
                <Form
                  className="h-5/6 flex column items-center justify-center gap-8 w-full"
                  onSubmit={handleSubmit}
                >
                  <Field
                    id="cpf"
                    label="CPF"
                    autofocus
                    name="cpf"
                    required="required"
                    maskField={"999.999.999-99"}
                    className="w-full"
                    component={InputText}
                    onChange={handleChange}
                    messageErros={<ErrorMessage name="cpf" />}
                  />
                  <Field
                    id="password"
                    label="Senha"
                    name="password"
                    className="w-full"
                    required="required"
                    component={InputText}
                    messageErros={<ErrorMessage name="password" />}
                  />
                  <button
                    className="bg-emerald-800 p-5 text-white rounded-md w-4/6 hover:bg-emerald-700"
                    type="submit"
                  >
                    Entrar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex-1">
          <WeekColor />
        </div>
      </div>
    </div>
  );
}
