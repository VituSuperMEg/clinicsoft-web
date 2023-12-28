import { Messages } from "../../../helpers/messages";

export function Medicos () {
  const msg = new Messages();

  async function handleDelete() {

    const check = await msg.confirmationDeleteReturn('Deseja realmente deletar isso?');
    if(check) {
      alert('Are')
    }
  }
  return (
    <div className="crud">
      <button onClick={() => handleDelete()}>delete</button>
    </div>
  )
}