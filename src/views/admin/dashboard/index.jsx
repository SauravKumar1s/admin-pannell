import DonutChart from "react-donut-chart";
import { Table, Table2 } from "../../../components/dashboard/Table";
import Card from "../../../components/dashboard/Card";
import Graph from "../../../components/dashboard/Graph";

const reactDonutChartdata = [
  {
    label: "audi",
    value: 100,
    color: "#FF4560",
  },
  {
    label: "tata",
    value: 50,
    color: "#775DD0",
  },
];
const reactDonutChartBackgroundColor = ["#FF4560", "#775DD0"];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};
const Dashboard = () => {
  return (
    <div className="sm:px-8">
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:flex justify-between">
        <div className="w-full">
          <Graph />
        </div>
        <div className="flex items-center justify-center xl:w-[400px] bg-gray-100 border border-gray-300 shadow-sm rounded-2xl">
          <DonutChart
            className="flex justify-center items-center"
            width={400}
            height={300}
            onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
            strokeColor={reactDonutChartStrokeColor}
            data={reactDonutChartdata}
            colors={reactDonutChartBackgroundColor}
            innerRadius={reactDonutChartInnerRadius}
            selectedOffset={reactDonutChartSelectedOffset}
            onClick={(item, toggled) =>
              reactDonutChartHandleClick(item, toggled)
            }
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:flex justify-between">
        <div className="w-full">
          <Table />
        </div>
        <div className="items-center justify-center xl:w-[600px] md:w-full  border border-gray-300 shadow-sm rounded-2xl">
          <Table2 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
