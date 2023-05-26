import React from "react";
import { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import axios from "axios";

const { Option } = Select;

const Forms_1 = (props) => {
  const [input, setInput] = useState();
  const handleinput1 = (e) => {
    const { name, value } = e.target;
    console.log(e.target, "jdkd");
    setInput({ ...input, [name]: value });
  };
  console.log(input, "input");
  const { open, setOpen } = props;

  const onClose = () => {
    setOpen(false);
  };

  const onnext = () => {
    props.setvalue(1)
  };

const submited =()=>{
  axios.post( `http://localhost:4000/data`,input)
}

  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="COMPANY"
              label="COMPANY"
              rules={[{ required: true, message: "Please enter user name" }]}
              onChange={handleinput1}
            >
              <Input placeholder="Firm's name" name="hello" />
              <Button onClick={submited}>submit</Button>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="LEAD / NEED"
              label="LEAD / NEED"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Enter the client requirement here" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="SOURCE"
              label="SOURCE"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Through whom/where got this lead" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="POC NEEDED"
              label="POC NEEDED"
              rules={[{ required: true, message: "Please choose the type" }]}
            >
              <Select placeholder="Select">
                <Option value="private">Yes</Option>
                <Option value="public">No</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="PROJECT TYPE"
              label="PROJECT TYPE"
              rules={[
                { required: true, message: "Please choose the approver" },
              ]}
            >
              <Select placeholder="Please choose the approver">
                <Option value="Consluting">Consluting</Option>
                <Option value="IT Services">IT Services </Option>
                <Option value="App Development">App Development</Option>
                <Option value="Website Development">Website Development</Option>
                <Option value="IT Services">Digital Marketing </Option>
                <Option value="App Development">Digital Transformation</Option>
                <Option value="Website Development">
                  E-Commerce Development
                </Option>
                <Option value="IT Services">IT Services </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="INDUSTRY/DOMAIN"
              label="INDUSTRY/DOMAIN"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Industry / Domain the client operators in" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="PROBABILITY OF CONVERSION"
              label="PROBABILITY OF CONVERSION"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="What's the probable % of conversion?" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="STATUS"
              label="STATUS"
              rules={[
                { required: true, message: "Please choose the approver" },
              ]}
            >
              <Select placeholder="Select">
                <Option value="jack">Hot</Option>
                <Option value="tom">Cold</Option>
                <Option value="tom">Warm</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="approver"
              label="DEAL STAGE"
              rules={[
                { required: true, message: "Please choose the approver" },
              ]}
            >
              <Select placeholder="Select">
                <Option value="jack">Prospect</Option>
                <Option value="tom">Qualified</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div class="grid justify-items-end items-end">
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onnext}>Next</Button>
          </Space>
        </div>
    </div>
  );
};

export default Forms_1;
