import React, { useState } from "react";
import SideDrawer from "../Component/SideDrawer";
import Tables from "../Component/Table";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Input } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import IDropBox from "../Component/IDropBox";

const { Header, Sider, Content } = Layout;

const Navcontainer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerClickd = () => {
    setOpen(true);
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          
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

        <Layout className="site-layout">
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
                <Input placeholder="Search" />
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

          <div className="flex justify-between items-center">
            <div>
              <IDropBox />
            </div>
            <div className="flex ">
              <button
                style={{
                  margin: "24px",
                }}
                type="button"
                class="py-2   px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  border-radius: 1.5rem;  rounded-lg w-36"
                onClick={handleDrawerClickd}
              >
                Add User
              </button>
            </div>
          </div>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div className="flex justify-between items-center">
              <div>Leads</div>
              <div>
                {/* <TextField
                  sx={{
                    backgroundColor: "white",
                    borderRadius:75
                  }}
                  label={"Search"}
                ></TextField> */}
                <Input placeholder="Search" sx={{ background: "black" }} />
              </div>
            </div>
            <Tables />
          </Content>
        </Layout>
      </Layout>
      <div class="flex-none w-60 shadow-xl m-1.5 ">
        <SideDrawer open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Navcontainer;
