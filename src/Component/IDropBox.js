import React from "react";
import { Dropdown } from "antd";

const items = [
  {
    label: <a href="#">Hot</a>,
    key: "0",
  },
  {
    label: <a href="#">Cold</a>,
    key: "1",
    color: "blue",
  },
  {
    label: <a href="#">Warm</a>,
    key: "2",
  },
];

const DropBoxUpdated = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <button
        style={{
          margin: "24px",
        }}
        type="button"
        class="py-2   px-4  hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  border-radius: 1.5rem;  rounded-lg w-36"
      >
        Ideassion
      </button>
    </a>
  </Dropdown>
);

export default DropBoxUpdated;
