import React from "react";
import { useState } from "react";
import SideDrawer from "../Component/SideDrawer";
import Tables from "../Component/Table";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Input } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import NewTable from "./NewTable";

const { Header, Footer, Sider, Content } = Layout;

const NewBody = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  

  return (
    <div>
      {/* <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} sx={{ height: 300 }} >
          <div className="flex justify-center items-center  h-24">
            <div className=" text-white text-5xl">LOGO</div>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "DashBoard",
              },
              {
                key: "2",
                icon: <TeamOutlined />,
                label: "Leads",
              },
            ]}
          />
        </Sider>

        <Header
          className="flex justify-between items-center"
          style={{
            background: colorBgContainer,
          }}
        >
          <div class="flex items-center">
            <div class="flex-none w-12">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </div>

            <div class="flex-none w-12">
              <Search />
            </div>
            <div class="flex-none ">
              <Input placeholder="Basic usage" />
            </div>
          </div>

          <div className="flex">
            <CircleNotificationsOutlined sx={{ width: 30, height: 30 }} />
            <Avatar
              sx={{ width: 30, height: 30, marginLeft: 5 }}
              alt="Remy Sharp"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            />
          </div>
        </Header>
      </Layout> */}
   <NewTable/>
    </div>
  );
};

export default NewBody;
