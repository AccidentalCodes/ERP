import React from "react";
import Chart from "../Component/Chart_1";
import Tables from "../Component/Table";
import MainTable from "../Comp/MainTable";

const ChartContents = () => {
  return (
    <>
      {/* <div class="grid grid-cols-5 grid-rows-1 gap-4 p-5">
        <div class="shadow-lg bg-[#8b5cf6]  text-white text-lg font-bold text-start p-10 rounded-lg row-span-1">
          Leads Converted
          <br />
          <div className="text-5xl">3,299</div>
        </div>
        <div class="shadow-lg bg-[#f97316]  text-white text-lg font-bold text-start p-10 rounded-lg row-span-1">
          New Leads
          <br />
          <div className="text-5xl">2,876</div>
        </div>
        <div class="shadow-lg bg-[#10b981]  text-white text-lg font-bold text-start p-10 rounded-lg row-span-1">
          Active Leads
          <br />
          <div className="text-5xl">1,735</div>
        </div>
        <div class="shadow-lg bg-[#dc2626]  text-white text-lg font-bold text-start p-10 rounded-lg row-span-1">
          Inactive Leads
          <br />
          <div className="text-5xl">2,876</div>
        </div>
        <div class="shadow-lg bg-white text-black text-lg font-bold text-start p-10 rounded row-span-2">
          Lead Funnel
          <br/>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-72 rounded-full">
            Prospect
          </button>
        </div>
        <div class="shadow-lg bg-white text-black text-lg font-bold text-center p-10 rounded-lg col-span-2">
          5
        </div>
        <div class="shadow-lg bg-white text-black text-lg font-bold text-start p-4 rounded-lg col-span-2">
          Lead Status
          <Chart />
        </div>
        <div class="shadow-lg bg-white text-black text-lg font-bold text-center p-2 rounded-lg col-span-full">
          <Table />
        </div>
      </div> */}

      <div class="grid grid-cols-12 grid-rows-3 gap-6 p-2">
        <div class="shadow-lg col-span-2 bg-[#8b5cf6]  text-white text-lg text-start font-bold p-5 rounded-lg ">
          Leads Converted
          <br />
          <div className="text-5xl">3,299</div>
        </div>
        <div class="shadow-lg col-span-2 bg-[#f97316]  text-white text-lg font-bold text-start p-5 rounded-lg row-span-0">
          New Leads
          <br />
          <div className="text-5xl">2,876</div>
        </div>
        <div class="shadow-lg col-span-2 bg-[#10b981]  text-white text-lg font-bold text-start p-5 rounded-lg ">
          Active Leads
          <br />
          <div className="text-5xl">1,735</div>
        </div>
        <div class="shadow-lg col-span-2 bg-[#dc2626]  text-white text-lg font-bold text-start p-5 rounded-lg ">
          Inactive Leads
          <br />
          <div className="text-5xl">2,876</div>
        </div>
        <div class="shadow-lg bg-white text-black col-span-4 text-lg font-bold text-center p-5 rounded row-span-3 ">
          Lead Funnel
          <br />
          <button class="bg-yellow-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 rounded-full">
            Prospect
          </button>
          <button class="bg-teal-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 rounded-full">
            Prospect
          </button>
          <button class="bg-orange-700 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 w-72 rounded-full">
            Prospect
          </button>
          <button class="bg-orange-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 rounded-full">
            Prospect
          </button>
          <button class="bg-lime-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 w-56 rounded-full">
            Prospect
          </button>
          <button class="bg-blue-500 flex-none m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 w-48 rounded-full">
            Prospect
          </button>
        </div>
        <div class="shadow-lg bg-white text-black  text-lg font-bold text-center p-5 rounded-lg col-span-5 row-span-2 ">
          5
        </div>
        <div class="shadow-lg  bg-white text-black text-lg font-bold text-center p-5 rounded-lg col-span-3 row-span-2">
          Lead Status
          <Chart />
        </div>
        <div class=" shadow-lg bg-white text-black text-lg font-bold text-center p-2 rounded-lg col-span-full row-span-2">
         <Tables/>
          {/* <MainTable /> */}
        </div>
      </div>
    </>
  );
};

export default ChartContents;
