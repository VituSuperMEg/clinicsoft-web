import { If } from "../../../helpers/If";

export function WeekColor() {
  const weeks = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const countWeek = Number(new Date().getMonth() - 10);
  const week = weeks[countWeek];
  return (
    <div className="flex items-center justify-center h-full">
      <If test={week === "Jan"}>
        <div className="column items-center">
          <h1 className="text-5xl text-emerald-800">Janeiro Branco</h1>
          <strong className="text-2xl text-emerald-800 mt-5">
            Cuidado com a Saúde Mental
          </strong>
          <p className="w-10/12 mt-5 justify">
            É uma <strong className="text-emerald-800">campanha global</strong>{" "}
            de conscientização sobre a Saúde Mental{" "}
            <strong className="text-emerald-800">
              {" "}
              iniciada em 2014 no Brasil.
            </strong>{" "}
            A campanha busca chamar a atenção para a Saúde Mental como um
            aspecto vital para melhorar a qualidade de vida das pessoas,
            promover relações sociais mais saudáveis e transformações positivas
            nas instituições sociais no mundo inteiro.. O mês de janeiro foi{" "}
            <strong className="text-emerald-800"></strong>estrategicamente
            escolhido porque, como primeiro mês do ano, promove nas pessoas
            maior abertura para{" "}
            <strong className="text-emerald-800">reflexões,</strong>{" "}
            <strong className="text-emerald-800">novas resoluções</strong> e{" "}
            <strong className="text-emerald-800">
              metas para o ano que se inicia.
            </strong>{" "}
            A cor branca representa as folhas ou telas em branco, em que uma
            pessoa pode desenhar, escrever ou reescrever o que desejar para si e
            para o mundo, simbolizando o horizonte aberto e criando o sentimento
            de potência ilimitada que cada início de ano possibilita à
            humanidade.
          </p>
          <a
            href="https://pt.wikipedia.org/wiki/Janeiro_Branco"
            className="text-emerald-800 mt-5"
          >
            Fonte : https://pt.wikipedia.org/wiki/Janeiro_Branco
          </a>
        </div>
      </If>
      <If test={week === "Feb"}>
        <div className="column items-center">
          <h1 className="text-5xl text-emerald-800">Fevereiro Laranja</h1>
          <strong className="text-2xl text-emerald-800 mt-5">
            Combate à Leucemia
          </strong>
          <p className="w-10/12 mt-5 justify">
            Trata-se de uma{" "}
            <strong className="text-emerald-800">neoplasia maligna</strong> dos
            glóbulos brancos, sem uma origem definida, mas desencadeada pelo{" "}
            <strong className="text-emerald-800">
              acúmulos de células alteradas na medula óssea.
            </strong>{" "}
            Nesse estado, a produção das células normais é
            <strong className="text-emerald-800"> prejudicada</strong> por esse
            evento. É na medula óssea que estão as células produtoras de{" "}
            <strong className="text-emerald-800">leucócitos </strong>(glóbulos
            brancos), <strong className="text-emerald-800">hemácias</strong> ou{" "}
            <strong className="text-emerald-800">eritrócitos</strong>
            (glóbulos vermelhos), além das{" "}
            <strong className="text-emerald-800">plaquetas.</strong>Em condições
            normais, a medula produz a quantidade ideal para manter o organismo
            saudável. Já no caso da leucemia, a célula sanguínea sofre mutações
            genéticas, transformando as células sadias em cancerosas, que se
            multiplicam rapidamente e ocupam o espaço daquelas que deveriam ser
            saudáveis. Embora existam 12 tipos de leucemia, no entanto, as mais
            comuns são: Leucemia mieloide aguda (LMA) Leucemia mieloide crônica
            (LMC) Leucemia linfocítica aguda (LLA) Leucemia linfocítica crônica
            (CLL)
          </p>
          <a
            href="https://www.fsfx.com.br/usisaude/fevereiro-laranja/"
            className="text-emerald-800 mt-5"
            target="blank"
          >
            Fonte : https://www.fsfx.com.br/usisaude/fevereiro-laranja/
          </a>
        </div>
      </If>
      <If test={week === "Dec"}>
        <h2>Dezembro Vermelho</h2>
      </If>
    </div>
  );
}
