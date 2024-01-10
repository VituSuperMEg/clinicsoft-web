import Chart from 'react-apexcharts';

interface ILineChart {
  options : {
    chart : {
      id : string
    },
    xaxis : {
      categories : number[]
    }
  },
  series : [
    {
      name : string,
      data : number[]
    }
  ],
  width : number
}
export function LineChart({
  options,
  series,
  width
}: ILineChart) {
  return (
    <Chart
    options={options}
    series={series}
     type="line"
     width={width}
    />
  )
}
