import { ReactNode } from "react";
import { If } from "../../helpers/If";

interface ICardValue {
  title: {
    title: string;
    size?: number;
    color?: string;
  };
  icon: ReactNode;
  iconBg?: 'red' | 'green' | 'yellow' | 'blue';
  amount: number;
  directIconAndAmount?: "column" | "row";
  currentDate?: boolean;
  className: string;
}
export function CardValue({
  title,
  icon,
  className,
  amount,
  currentDate = false,
  directIconAndAmount = "column",
  iconBg
}: ICardValue) {

  const iconColors = {
    'red': '#ef4444',
    'green': '#10b981',
    'yellow': '#eab308',
    'blue': '#3b82f6',
  };

  return (
    <div className={`${className}`}>
      <If test={directIconAndAmount === "column"}>
        <div className="flex items-center justify-center gap-10 w-full">
          <div style={{
            backgroundColor : iconColors[iconBg],
            width : iconBg ?  50 : 0,
            height : iconBg ? 50 : 0,
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            borderRadius: "50%"
          }}>
          {icon}
          </div>
          <div>
            <h1>{amount}</h1>
            <span
              style={{
                fontSize: !title.size ? "15px" : title.size,
                color: !title.color ? "#000" : title.color,
              }}
            >
              {title.title}
            </span>
          </div>
        </div>
      </If>

      <If test={currentDate}>
        <strong>{new Date().toLocaleDateString()}</strong>
      </If>
    </div>
  );
}
