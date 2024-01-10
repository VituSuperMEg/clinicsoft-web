import { FirstAidKit } from "@phosphor-icons/react";
import { DashboardStyle, Scrolling } from ".";
import { Slider } from "../components/Slider";
import { LineChart } from "../../../components/charts/LineChart";

export function DashBoard() {
  return (
    <DashboardStyle>
      <Scrolling>
        <Slider />
        <div className="mt-6">
         <LineChart
          options={{
            chart : {
              id : "basic-line"
            },
            xaxis : {
              categories : [2022,2023,2024]
            }
          }}
          series={[
            {
              name : "series-1",
              data : [50,40,30]
            }
          ]}
          width={500}
         />
        </div>
      </Scrolling>
    </DashboardStyle>
  );
}
