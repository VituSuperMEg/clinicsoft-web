import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { SignOut } from "@phosphor-icons/react";
import { useUser } from "../../state/auth";
import { Notifications } from "./notifications/Notifications";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Messages } from "../../helpers/messages";
import { Plight } from "./plight/Plight";

export function UserInfo() {
  const msg = new Messages();
  const signOut = <Tooltip>Sair</Tooltip>;

  async function handleSignOut() {
    const check =  await msg.confirmationReturn('Deseja realmente sair do sistema?', 'Sair')
    if (check) {
      alert("Saiu");
    }
  }
  return (
    <div className="flex items-center gap-3 pr-5">
      <Plight status="0" />
      <Notifications notification={5} />
      <Avatar>
        <AvatarImage src="/vite.svg" />
      </Avatar>
      <div>
        <p>Root</p>
        <strong>Hospital Regional de Cedro</strong>
      </div>
      <OverlayTrigger placement="bottom" overlay={signOut} trigger="hover">
        <div className="bg-slate-100 p-2 rounded-lg clicked">
          <SignOut 
           size={30} 
           onClick={() => handleSignOut()}
           className="text-red-800"
          />
        </div>
      </OverlayTrigger>
    </div>
  );
}
