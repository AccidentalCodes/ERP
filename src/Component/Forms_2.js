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

const { Option } = Select;
const Forms_2 = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="CLIENT CONTACT NAME"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Enter the Client's name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="name"
              label="DESINATION"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="EMAIL"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="type"
              label="Type"
              rules={[{ required: true, message: "Please choose the type" }]}
            >
              <Select placeholder="Please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="approver"
              label="Approver"
              rules={[
                { required: true, message: "Please choose the approver" },
              ]}
            >
              <Select placeholder="Please choose the approver">
                <Option value="jack">Jack Ma</Option>
                <Option value="tom">Tom Liu</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
        <Col span={12}>
            <Form.Item
              name="approver"
              label="Approver"
              rules={[
                { required: true, message: "Please choose the approver" },
              ]}
            >
              <Select placeholder="Please choose the approver">
                <Option value="jack">Jack Ma</Option>
                <Option value="tom">Tom Liu</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}></Row>
      </Form>
    </div>
  );
};

export default Forms_2;
