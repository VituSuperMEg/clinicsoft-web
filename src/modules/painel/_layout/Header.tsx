import { users } from "../../../mocks/mocks";

export function Header() {
  const myUser = users[0];

  return (
    <div className="header bg-emerald-50">
      <div style={{
        padding : 20
      }}>
      <strong>{myUser.entidade}</strong>
      </div>  
    </div>
  );
}
