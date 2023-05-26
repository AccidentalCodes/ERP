import * as React from "react";
import { Button, Space, Input, Select, Form } from "antd";

import { use } from "echarts";

export default function CheckForm2(props) {
  const country_val = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "USA",
      label: "USA",
    },
    {
      value: "UK",
      label: "UK",
    },
  ];

  const city_val = [
    {
      value: "chennai",
      label: "chennai",
    },
    {
      value: "madurai",
      label: "madurai",
    },
    {
      value: "trichy",
      label: "trichy",
    },
  ];

  const handleChangedrop = (field, value) => {
    if (field === "country") {
      props.setDatas({ ...props.datas, COUNTRY: value });
    } else if (field === "city") {
      props.setDatas({ ...props.datas, CITY: value });
    }
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    props.setDatas({ ...props.datas, [name]: value });
  };

  const onnext = () => {
    props.setvalue(2);
  };

  const onback = () => {
    props.setvalue(0);
  };

  return (
    <>
      <Form layout="vertical">
        <div>
          <div class="grid p-4 grid-cols-2 content-center gap-2">
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="CLIENT_CONTACT_NAME"
                label="CLIENT_CONTACT_NAME"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter the Client's name"
                  onChange={handleValueChange}
                  name="CLIENT_CONTACT_NAME"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="DESIGNATION"
                label="DESIGNATION"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter their current designation"
                  onChange={handleValueChange}
                  name="DESIGNATION"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="EMAIL"
                label="EMAIL"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter their current designation"
                  onChange={handleValueChange}
                  name="EMAIL"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="PHONE"
                label="PHONE"
                rules={[
                  { required: true, message: "Please enter user number" },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Please enter user number"
                  onChange={handleValueChange}
                  name="PHONE"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="WEBSITE"
                label="WEBSITE"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter the link of the client's Website"
                  onChange={handleValueChange}
                  name="WEBSITE"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="COUNTRY"
                label="COUNTRY"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("country", value)}
                  options={country_val}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="CITY"
                label="CITY"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("city", value)}
                  options={city_val}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="BUSINESS"
                label="BUSINESS"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter the link of the client's Website"
                  onChange={handleValueChange}
                  name="BUSINESS"
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      <div class="grid p-2 m-9 justify-items-end items-end">
        <Space>
          <Button onClick={onback}>Back</Button>
          <Button onClick={onnext}>Next</Button>
        </Space>
      </div>
    </>
  );
}
