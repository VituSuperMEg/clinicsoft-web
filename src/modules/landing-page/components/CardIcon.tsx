import { Broadcast, Heart, ArchiveBox, Pill } from "@phosphor-icons/react";

export function CardIcon() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        marginTop: -170,
      }}
    >
      <div className="p-11 box m-9 shadow-lg bg-emerald-50 w-96 h-72 rounded-xl">
        <header className="flex flex-col gap-5">
          <Heart color="#065f46" weight="fill" size={50} />
          <strong className="text-emerald-800">
            Controle de Atendimento ao Paciente
          </strong>
        </header>
        <p className="text-zinc-600 mt-4 text-pretty">
          Tenha <strong className="text-emerald-800">controle</strong>,{" "}
          <strong className="text-emerald-800">organização</strong> e{" "}
          <strong className="text-emerald-800">solução</strong> para seus
          atendimentos ao paciente.
          <br />
          Sem <strong className="text-emerald-800">dores de cabeça</strong> e
          com <strong className="text-emerald-800">solução real</strong> as suas
          demandas.
        </p>
      </div>
      <div className="p-11 box m-9 shadow-lg bg-emerald-50 w-96 h-72 rounded-xl">
        <header className="flex flex-col gap-5">
          <Broadcast color="#065f46" weight="fill" size={50} />
          <strong className="text-emerald-800">
            Gerenciamento Rápido e Eficaz
          </strong>
          <p className="text-zinc-600">
            Tenha controle, organização e solução para seus atendimentos ao
            paciente.
            <br />
            Sem dores de cabeça e com solução real as suas demandas.
          </p>
        </header>
      </div>
      <div className="p-11 box m-9 shadow-lg bg-emerald-50 w-96 h-72 rounded-xl">
        <header className="flex flex-col gap-5">
          <ArchiveBox color="#065f46" weight="fill" size={50} />
          <strong className="text-emerald-800">Controle de Estoque </strong>
          <p className="text-zinc-600">
            Tenha controle, organização e solução para seus atendimentos ao
            paciente.
            <br />
            Sem dores de cabeça e com solução real as suas demandas.
          </p>
        </header>
      </div>
      <div className="p-11 box m-9 shadow-lg bg-emerald-50 w-96 h-72 rounded-xl">
        <header className="flex flex-col gap-5">
          <Pill color="#065f46" weight="fill" size={50} />
          <strong className="text-emerald-800">
            {" "}
            Controle de Medicamentos
          </strong>
          <p className="text-zinc-600">
            Tenha controle, organização e solução para seus atendimentos ao
            paciente.
            <br />
            Sem dores de cabeça e com solução real as suas demandas.
          </p>
        </header>
      </div>
    </div>
  );
}
