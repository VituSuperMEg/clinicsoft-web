import Tabs from 'react-bootstrap/Tabs';
import { ReactNode } from 'react';

interface ITab {
  defaultTab: string;
  children: ReactNode;
  className: string;
}
export function TabComponent ({
  defaultTab,
  children,
  className
}:ITab) {
  return (
    <Tabs
     defaultActiveKey={defaultTab}
     transition={true}
     id="noanim-tab-example"
     className={`${className}`}
    >
      {children}
    </Tabs>
  )
}
