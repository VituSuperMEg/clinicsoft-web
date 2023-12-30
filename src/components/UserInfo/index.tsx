import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { SignOut } from '@phosphor-icons/react'
import { useUser } from "../../state/auth"
import { Notifications } from "../notifications/Notifications"
import * as Tooltip from '@radix-ui/react-tooltip';


export function UserInfo () {
    

  return (
     <div className="flex items-center gap-3 pr-5">
       <Notifications notification={5}/>
       <Avatar>
        <AvatarImage src="/vite.svg" />
       </Avatar>
       <div>
       <p>Root</p>
       <strong>Hospital Regional de Cedro</strong>
       </div>
       <div className="bg-slate-100 p-3 rounded-lg clicked">
           <SignOut size={30}/>    
       </div>
     </div>
  )
}