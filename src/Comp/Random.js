import * as React from "react";
import { Button, Space, Input, Select, Form } from "antd";

export default function Random(props) {
  const boolean_val = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
  ];

  const proj_type = [
    {
      value: "Consluting",
      label: "Consluting",
    },
    {
      value: "IT Services",
      label: "IT Services",
    },
    {
      value: "App Development",
      label: "App Development",
    },
    {
      value: "Website Development",
      label: "Website Development",
    },
    {
      value: "Digital Marketing",
      label: "Digital Marketing",
    },
    {
      value: "Digital Transformation",
      label: "Digital Transformation",
    },
    {
      value: "E-Commerce Development",
      label: "E-Commerce Development",
    },
  ];

  const status_val = [
    {
      value: "Hot",
      label: "Hot",
    },
    {
      value: "Cold",
      label: "Cold",
    },
    {
      value: "Warm",
      label: "Warm",
    },
  ];

  const deal_val = [
    {
      value: "Prospect",
      label: "Prospect",
    },
    {
      value: "Qualified",
      label: "Qualified",
    },
  ];

  const onnext = () => {
    props.setvalue(1);
  };

  const onback = () => {
    props.setvalue(0);
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    props.setDatas({ ...props.datas, [name]: value });
  };

  const handleChangedrop = (field, value) => {
    if (field === "poc_needed") {
      props.setDatas({ ...props.datas, POCNEEDED: value });
    } else if (field === "project_type") {
      props.setDatas({ ...props.datas, PROJECT_TYPE: value });
    } else if (field === "deal") {
      props.setDatas({ ...props.datas, DEAL_STAGE: value });
    } else if (field === "status") {
      props.setDatas({ ...props.datas, STATUS: value });
    }
  };

  return (
    <>
      <Form layout="vertical">
        <div>
          <div class="grid p-4 grid-cols-2 content-center gap-2">
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="COMPANY"
                label="COMPANY"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Firm's name"
                  onChange={handleValueChange}
                  name="COMPANY"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="LEAD_NEED"
                label="LEAD_NEED"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter the client requirement here"
                  onChange={handleValueChange}
                  name="LEAD_NEED"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="SOURCE"
                label="SOURCE"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Through whom/where got this lead"
                  onChange={handleValueChange}
                  name="SOURCE"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="POC_NEEDED"
                label="POC_NEEDED"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("poc_needed", value)}
                  options={boolean_val}
                  name="POC_NEEDED"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                label="PROJECT_TYPE"
                name="PROJECT_TYPE"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  name="PROJECT_TYPE"
                  onChange={(value) => handleChangedrop("project_type", value)}
                  options={proj_type}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="INDUSTRY_DOMAIN"
                label="INDUSTRY_DOMAIN"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Industry / Domain the client operators in"
                  onChange={handleValueChange}
                  name="INDUSTRY_DOMAIN"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="PROBABILITY_OF_CONVERSION"
                label="PROBABILITY_OF_CONVERSION"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  type="number"
                  placeholder="What's the probable % of conversion?"
                  onChange={handleValueChange}
                  name="PROBABILITY_OF_CONVERSION"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="STATUS"
                label="STATUS"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("status", value)}
                  options={status_val}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="DEAL_STAGE"
                label="DEAL_STAGE"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("deal", value)}
                  options={deal_val}
                ></Select>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      <div class="grid p-2 m-9 justify-items-end items-end">
        <Space>
          <Button onClick={onnext}>Next</Button>
        </Space>
      </div>
    </>
  );
}
