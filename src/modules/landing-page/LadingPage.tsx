import { api } from "../../services/api";
import { CardIcon } from "./components/CardIcon";
import { Header } from "./components/Header";
import { useEffect } from "react";

export function LadingPage() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get("/agendamentos");
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <div className="bg-gray-50 h-dvh">
      <Header />
      <main className="p-14 h-full flex items-center justify-between">
        <div className="home-blur"></div>
        <div className="py-20">
          <h1 className="text-3xl">
            A ClinicSoft é uma{" "}
            <strong className="text-emerald-800">solução inovadora</strong> que
            visa aprimorar <br />a eficiência e a{" "}
            <strong className="text-emerald-800">
              gestão em ambientes de saúde.
            </strong>
          </h1>
          <p
            className="text-gray-500 mt-5"
            style={{
              width: "800px",
            }}
          >
            Seja como um software abrangente para a administração de clínicas
            médicas ou como o nome de uma clínica específica, a ClinicSoft
            destaca-se por oferecer funcionalidades avançadas, como agendamento
            de consultas, prontuários eletrônicos, faturamento integrado e
            outros recursos essenciais. Com um compromisso com a excelência, a
            ClinicSoft busca proporcionar uma experiência otimizada tanto para
            profissionais de saúde quanto para pacientes, promovendo assim uma
            abordagem moderna e eficaz na prestação de serviços de saúde.
          </p>

          <button className="bg-emerald-800 p-5 rounded-xl text-white mt-5 hover:bg-emerald-700 ease-in">
            <strong>Entre em contato!</strong>
          </button>
        </div>
        <div>
          <img src="public/medicine.svg" alt="" width={800} />
        </div>
      </main>
      <section className="bg-gray-50">
        <CardIcon />
      </section>
    </div>
  );
}
