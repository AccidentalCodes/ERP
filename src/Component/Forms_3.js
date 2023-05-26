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
              name="type"
              label="LEAD MANAGED BY"
              rules={[{ required: true, message: "Please choose the type" }]}
            >
              <Select placeholder="Please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="name"
              label="BA ASSIGNED"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="type"
              label="TECH STACK"
              rules={[{ required: true, message: "Please choose the type" }]}
            >
              <Select placeholder="Please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
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
        </Row>
      </Form>
    </div>
  );
};

export default Forms_2;
