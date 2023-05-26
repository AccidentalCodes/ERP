import React from "react";
import Chart_1 from "./Chart_1";
import Car from "../Comp/Car";

const ChartContent = () => {
  return (
    <>
      <div class="grid p-7 grid-cols-4  gap-2">
        <div class="col-span-4 flex bg-orange-700  ">
          <div class=" h-60 bg-red-600 flex justify-between">
            <div class="flex w-52  items-center justify-center bg-orange-400">
              01
            </div>
            <div class="... flex w-52  items-center justify-center bg-amber-400">
              02
            </div>
            <div class="... flex w-52  items-center justify-center bg-amber-600">
              03
            </div>
            <div class="... flex w-52  items-center justify-center bg-amber-500">
              04
            </div>
          </div>
        </div>

        <div class="flex  items-center justify-center  bg-red-900 ">
          {/* <Chart_1 /> */} 07
        </div>

        <div class="flex items-center h-52   justify-center bg-red-400">01</div>
        <div class="flex items-center justify-center bg-orange-400">02</div>
        <div class="flex items-center justify-center bg-amber-400">03</div>
        <div class="col-span-3 flex items-center justify-center "></div>
      </div>
    </>
  );
};

export default ChartContent;
