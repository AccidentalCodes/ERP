import React, { useState } from "react";
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
import Car from "../Comp/Car";

import Tabss from "./Tabs";

const { Option } = Select;

const SideDrawer = (props) => {
  const { open, setOpen } = props;

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
        {/* <Tabss /> */}
        <Car onClose={onClose} />
      </Drawer>
    </>
  );
};

export default SideDrawer;
