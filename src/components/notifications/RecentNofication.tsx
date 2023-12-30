import { messagesMocks } from "../../mocks/mocks";
import { RecentNofications } from "./styles";

export function RecentNoficationsService() {
  return (
    <RecentNofications className="bg-slate-100 rounded-lg shadow-lg p-4">
      <section>
        <div>
          <strong className="text-emerald-800">Notificações Recentes</strong>
          <hr className="mt-2" />
        </div>
        <div className="recents">
          {messagesMocks.slice(0,3).map(m => (
            <div 
              className={`${m.lida ? 'bg-slate-300' : 'bg-slate-50'}`}
              key={m.id}
              style={{
                cursor : m.lida ? 'not-allowed' : 'normal'
              }}
            >
              <strong className="text-emerald-800">{m.remetente}</strong>
              <p>{m.message}</p>
            </div>
          ))}
        </div>
        <div>
          <hr />
          <p className="mt-3 text-emerald-800 clicked">Exibir Todas</p>
        </div>
      </section>
    </RecentNofications>
  );
}
