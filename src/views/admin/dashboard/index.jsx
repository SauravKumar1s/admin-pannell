import DonutChart from "react-donut-chart";
import { Table, Table2 } from "../../../components/dashboard/Table";
import Card from "../../../components/dashboard/Card";
import Graph from "../../../components/dashboard/Graph";

const reactDonutChartdata = [
  {
    label: "audi e-tron GT quattro",
    value: 100,
    color: "#FF4560",
  },
  {
    label: "Q4 Sportback e-tron",
    value: 50,
    color: "#775DD0",
  },
];

const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};

const Dashboard = () => {
  return (
    <div className="sm:px-8">
      <div className="mt-10 ">
        <Card />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:flex justify-between">
        <div className="w-full">
          <Graph />
        </div>
        <div className=" xl:w-[400px]  bg-gray-100 border border-gray-300 shadow-sm rounded-2xl">
          <h6 className="sm:text-2xl text-sm text-start p-2">Car Models</h6>
          <div className="flex flex-col justify-center items-center ">
            <div className="relative ">
              <DonutChart
                width={350}
                height={300}
                data={reactDonutChartdata}
                selectedOffset={reactDonutChartSelectedOffset}
                onClick={(item, toggled) =>
                  reactDonutChartHandleClick(item, toggled)
                }
              />

              <div
                className="absolute top-1/2 left-[117px]  transform -translate-x-1/2 -translate-y-1/2 "
                style={{ fontSize: "14px" }}
              >
                <p className="text-center font-bold ">597</p>
                <p className="text-center text-xl mb-10">product sold</p>
              </div>
            </div>
          </div>
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
