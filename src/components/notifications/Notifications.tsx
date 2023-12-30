import { Bell } from "@phosphor-icons/react";
import { NoficationContainer } from "./styles";
import { useState } from "react";
import { If } from "../../helpers/If";
import { RecentNoficationsService } from "./RecentNofication";

interface INofications {
  notification : number;
}
export function Notifications ({
  notification
}:INofications) {
  
  const [show, setShow] = useState(false);

  return (
    <>
    <NoficationContainer className="clicked" onClick={() =>  setShow((prevShow) => !prevShow)}>
      <Bell size={30}/>
      <span className="bg-red-500">{notification}</span>
    </NoficationContainer>
    <If test={show}>
     <RecentNoficationsService />
    </If>
    </>
  );
}