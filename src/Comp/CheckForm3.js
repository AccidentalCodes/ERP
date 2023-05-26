import * as React from "react";
import { Button, Space, Input, Select, Form } from "antd";
import axios from "axios";

export default function CheckForm3(props) {
  const lead_val = [
    {
      value: "Nihal",
      label: "Nihal",
    },
    {
      value: "Asif",
      label: "Asif",
    },
    {
      value: "Hassion",
      label: "Hassion",
    },
  ];

  const tech_val = [
    {
      value: "Nihal",
      label: "Nihal",
    },
    {
      value: "Asif",
      label: "Asif",
    },
    {
      value: "Hassion",
      label: "Hassion",
    },
  ];

  const company_val = [
    {
      value: "Nihal",
      label: "Nihal",
    },
    {
      value: "Asif",
      label: "Asif",
    },
    {
      value: "Hassion",
      label: "Hassion",
    },
  ];

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    props.setDatas({ ...props.datas, [name]: value });
  };

  const handleChangedrop = (field, value) => {
    if (field === "leadMangaedby") {
      props.setDatas({ ...props.datas, LEADMANAGEDBY: value });
    } else if (field === "techstack") {
      props.setDatas({ ...props.datas, TECHSTACK: value });
    } else if (field === "companyMapping") {
      props.setDatas({ ...props.datas, COMPANYMAPPING: value });
    }
  };

  const onback = () => {
    props.setvalue(1);
  };

  const submited = () => {
    axios.post(`http://localhost:4002/data`, props.datas);
    props.onClose();
    props.setvalue(0);
    props.datas(null);
  };

  return (
    <>
      <Form layout="vertical">
        <div>
          <div class="grid p-4 grid-cols-2 content-center gap-2">
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="input1"
                label="LEAD_MANAGED_BY"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("leadMangaedby", value)}
                  options={lead_val}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="BA_ASSIGNED"
                label="BA_ASSIGNED"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter their current designation"
                  onChange={handleValueChange}
                  name="BA_ASSIGNED"
                />
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="TECHSTACK"
                label="TECHSTACK"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) => handleChangedrop("techstack", value)}
                  options={tech_val}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="COMPANY_MAPPING"
                label="COMPANY_MAPPING"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Select"
                  onChange={(value) =>
                    handleChangedrop("companyMapping", value)
                  }
                  options={company_val}
                ></Select>
              </Form.Item>
            </div>
            <div class=" p-2 items-center justify-center ">
              <Form.Item
                name="TAGS"
                label="TAGS"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Enter the link of the client's Website"
                  onChange={handleValueChange}
                  name="TAGS"
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      <div class="grid p-2 m-9 justify-items-end items-end">
        <Space>
          <Button onClick={onback}>Back</Button>
          <Button onClick={submited}>Sumbit</Button>
        </Space>
      </div>
    </>
  );
}
