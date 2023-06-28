import DonutChart from "react-donut-chart";
import { Table } from "../../../components/dashboard/Table";
import Card from "../../../components/dashboard/Card";
import Graph from "../../../components/dashboard/Graph";

const reactDonutChartdata = [
  {
    label: "NDC",
    value: 25,
    color: "#00E396",
  },
  {
    label: "RDC",
    value: 65,
    color: "#FEB019",
  },
  {
    label: "STOCKIST",
    value: 100,
    color: "#FF4560",
  },
  {
    label: "HOSPITAL",
    value: 15,
    color: "#775DD0",
  },
];
const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
];
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
    <div>
      {/* Card widget */}
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* sales */}
        
        <Graph />
        <div className=" flex items-center justify-center bg-gray-100 border border-gray-300 shadow-sm rounded-2xl">
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
      {/* Tables & Charts */}
      <Table />
    </div>
  );
};

export default Dashboard;
