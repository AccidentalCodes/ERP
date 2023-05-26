import React, { useEffect, useState } from "react";
import { Filter, FilterAlt } from "@mui/icons-material";
import { Button, DatePicker, Input } from "antd";
import axios from "axios";

const MainTable = () => {
  const [storedata, setStoredata] = useState();
  // const[app,setApp]=useState(false)
  const DO = () => {
    axios
      .get(`http://localhost:4002/data`)
      .then((res) => setStoredata(res.data));
  };
  useEffect(() => {}, [DO()]);
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
                      COMPANY
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
                      POC NEEDED
                      <FilterAlt />
                    </th>
                    <th scope="col" className="px-6 py-4">
                      TAGS
                      <FilterAlt />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {storedata?.map((item) => {
                    return (
                      <tr className="border-b bg-neutral-100">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.COMPANY}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.CLIENT_CONTACT_NAME}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.LEADMANAGEDBY}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.STATUS}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.POCNEEDED}
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
