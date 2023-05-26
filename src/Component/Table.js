import React from "react";
import { Filter, FilterAlt } from "@mui/icons-material";
import { Button, DatePicker, Input } from "antd";

import DropBoxUpdated from "./DropBoxUpdated";

const Table = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      ID
                      <FilterAlt />
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 justify-center content-center"
                    >
                      OPPORTUNITY
                      <FilterAlt />
                    </th>
                    <th scope="col" className="px-6 py-4">
                      CLIENT
                      <FilterAlt />
                    </th>
                    <th scope="col" className="px-6 py-4">
                      MANAGED BY
                      <FilterAlt />
                    </th>
                    <th scope="col" className="px-6 py-4">
                      STATUS
                      <FilterAlt />
                    </th>
                    <th scope="col" className="px-6 py-4">
                      ETA
                      <FilterAlt />
                    </th>
                    <th scope="col" className="px-6 py-4">
                      TAGS
                      <FilterAlt />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b bg-neutral-100">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b  bg-neutral-100 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b bg-neutral-100  ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b bg-neutral-100 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <DropBoxUpdated />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <DatePicker style={{ width: "70%" }} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {" "}
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Tags
                      </Button>
                      <Button
                        style={{
                          background: "#2e2e2d",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        More Tags
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
