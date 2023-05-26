import { Input } from "antd";
import React from "react";
import Table from "../Component/Table";
import MainTable from "../Comp/MainTable";

export const LeadPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>Leads</div>
        <div>
          <Input placeholder="Search" sx={{ background: "black" }} />
        </div>
      </div>
      {/* 👉 Table */}
      {/* <Table /> */}
      <MainTable />

    </div>
  );
};
