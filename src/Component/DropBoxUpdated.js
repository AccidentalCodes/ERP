import React from "react";
import { Dropdown } from "antd";
import { Button } from "antd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const items = [
  {
    label: <a href="#">Hot</a>,
    key: "0",
  },
  {
    label: <a href="#">Cold</a>,
    key: "1",
    color:"blue"
  },
  {
    label: <a href="#">Warm</a>,
    key: "2",
  },
];

const DropBoxUpdated = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Button
        style={{
          background: "#c20420",
          color: "white",
        }}
      >
        {" "}
        Hot
        <ArrowDropDownIcon />
      </Button>
    </a>
  </Dropdown>
);

export default DropBoxUpdated;
