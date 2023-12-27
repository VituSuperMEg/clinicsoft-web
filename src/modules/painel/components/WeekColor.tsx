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
        <h1 className="text-5xl text-orange-900">Janeiro Branco</h1>
        <h3 className="text-2xl text-orange-900 mt-5">Cuidado com a Saúde Mental</h3>
        <p className="w-10/12 mt-5">
        é uma campanha global de conscientização sobre a Saúde Mental iniciada em 2014 no Brasil. A campanha busca chamar a atenção para a Saúde Mental como um aspecto vital para melhorar a qualidade de vida das pessoas, promover relações sociais mais saudáveis e transformações positivas nas instituições sociais no mundo inteiro.. O mês de janeiro foi estrategicamente escolhido porque, como primeiro mês do ano, promove nas pessoas maior abertura para reflexões, novas resoluções e metas para o ano que se inicia. A cor branca representa as folhas ou telas em branco, em que uma pessoa pode desenhar, escrever ou reescrever o que desejar para si e para o mundo, simbolizando o horizonte aberto e criando o sentimento de potência ilimitada que cada início de ano possibilita à humanidade
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
        <h1 className="text-5xl text-orange-900">Fevereiro Laranja</h1>
        <h3 className="text-2xl text-orange-900 mt-5">Combate à Leucemia</h3>
        <p className="w-10/12 mt-5">
          Trata-se de uma <strong className="text-orange-900">neoplasia maligna</strong> dos glóbulos brancos, sem uma origem
          definida, mas desencadeada pelo <strong className="text-orange-900">acúmulos de células alteradas na
          medula óssea.</strong> Nesse estado, a produção das células normais é
          <strong className="text-orange-900"> prejudicada</strong> por esse evento. É na medula óssea que estão as células
          produtoras de <strong className="text-orange-900">leucócitos </strong>(glóbulos brancos), <strong className="text-orange-900">hemácias</strong> ou <strong className="text-orange-900">eritrócitos</strong>
          (glóbulos vermelhos), além das <strong className="text-orange-900">plaquetas.</strong>Em condições normais, a
          medula produz a quantidade ideal para manter o organismo saudável. Já
          no caso da leucemia, a célula sanguínea sofre mutações genéticas,
          transformando as células sadias em cancerosas, que se multiplicam
          rapidamente e ocupam o espaço daquelas que deveriam ser saudáveis.
          Embora existam 12 tipos de leucemia, no entanto, as mais comuns são:
          Leucemia mieloide aguda (LMA) Leucemia mieloide crônica (LMC) Leucemia
          linfocítica aguda (LLA) Leucemia linfocítica crônica (CLL)
        </p>
        <a 
         href="https://www.fsfx.com.br/usisaude/fevereiro-laranja/"
         className="text-orange-900 mt-5"
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
