import React, { useState } from "react";
import BarChart from "./Charts/BarChart";
import { chartsData } from "./Charts/ChartData";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";

const Charts = () => {
  // Map month numbers to month names
  const monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const monthsOnly = chartsData.map((data) => {
    const date = new Date(data.salesDate);
    const month = date.getMonth() + 1;
    return {
      month: month,
    };
  });

  const [salesData, setSalesData] = useState({
    labels: monthsOnly.map((item) => monthNames[item.month]),
    datasets: [
      {
        label: "monthly sales",
        data: chartsData.map((data) => data.salesCount),
        backgroundColor: [
          "#067bc2",
          "#84BCDA",
          "#ECC30B",
          "#F37748",
          "#D56062",
          "#8075FF",
          "#CAD5CA",
          "#FCBFB7",
          "#06D6A0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (

    <div className="w-full flex">
      <div className="w-2/5">
        <BarChart chartData={salesData} />
      </div>
      <div className="w-2/5 ml-4">
        <div className="w-full">
          <LineChart chartData={salesData} />
        </div>
      </div>
      <div className="2/5">
          <PieChart chartData={salesData} />
        </div>
    </div>
  );
};

export default Charts;
