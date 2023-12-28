import { users } from "../../../mocks/mocks"

export function Header () {
  const myUser = users[0];

  return (
    <div className="header bg-emerald-50">
      {myUser.entidade}
    </div>
  )
}