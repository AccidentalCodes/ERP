import React from "react";
import ReactEcharts from "echarts-for-react";

function Chart_1() {
  const option = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 70, name: "Hot" },
          { value: 23, name: "Warm" },
          { value: 7, name: "Cold" },
        ],
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default Chart_1;
