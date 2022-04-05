import React, { useEffect, useState } from "react";
import LineChart from "../LineChart/LineChart";
import AreaChart from "../AreaChart/AreaChart";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";

const Dashboard = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-3 lg:w-11/12 w-full mx-auto mt-6">
      {/* Line Chart  */}
      <div>
        <h1 className="text-center font-serif mb-5 text-green-500 font-bold text-2xl">
          MONTH WISE SELL
        </h1>
        <LineChart information={information}></LineChart>
      </div>
      {/* Area Chart  */}
      <div>
        <h1 className="text-center font-serif mb-5 text-green-500 font-bold text-2xl">
          Investment vs Revenue
        </h1>
        <AreaChart information={information}></AreaChart>
      </div>
      {/* Bar Chart  */}
      <div>
        <h1 className="text-center font-serif mb-5 text-green-500 font-bold text-2xl">
          Investment vs Revenue
        </h1>
        <BarChart information={information}></BarChart>
      </div>
      {/* Pie Chart  */}
      <div>
        <h1 className="text-center font-serif mb-5 text-green-500 font-bold text-2xl">
          Investment vs Revenue
        </h1>
        <PieChart information={information}></PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
