import { ReactNode } from "react";
import { If } from "../../helpers/If";

interface ICardValue {
  title: string;
  icon: ReactNode;
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
}: ICardValue) {
  return (
    <div className={`${className}`}>
      <div
        style={{
          display: "flex",
          flexDirection: directIconAndAmount === "column" ? "column" : "row",
        }}
      >
        {icon}
        <h1>{amount}</h1>
      </div>
      {title}
      <If test={currentDate}>
        <strong>{new Date().toLocaleDateString()}</strong>
      </If>
    </div>
  );
}
