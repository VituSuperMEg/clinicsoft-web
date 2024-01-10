import { FirstAidKit } from "@phosphor-icons/react";
import { DashboardStyle, Scrolling } from ".";
import { CardValue } from "../../../components/cardvalue/CardValue";
import { Slider } from "../components/Slider";

export function DashBoard() {
  return (
    <DashboardStyle>
      <Scrolling>
        <Slider />
        <div className="mt-6">
        <CardValue
          className="bg-white w-96 h-56 shadow-md"
          icon={<FirstAidKit size={30}/>}
          amount={500}
          directIconAndAmount="column"
          title={{
            title : "Médicos",
            size : 25
          }}
        />
        </div>
      </Scrolling>
    </DashboardStyle>
  );
}
