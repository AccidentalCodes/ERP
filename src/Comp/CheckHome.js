import { TeamOutlined, HomeOutlined } from "@ant-design/icons";
import { Input } from "antd";
import SideDrawer from "../Component/SideDrawer";
import { Avatar, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import IDropBox from "../Component/IDropBox";
import { Layout } from "antd";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { LeadPage } from "./LeadPage";
import ChartContents from "../MainComp/ChartContents";

const { Header, Sider, Content } = Layout;

const CheckHome = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerClickd = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/DashboardPage");
  };

  const handleLeadClick = () => {
    navigate("/LeadPage");
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        {/* 👉 Slider */}
        <Sider
          style={{
            height: "100vh",
          }}
        >
          <div className="flex justify-center items-center  h-24">
            <div className=" text-white text-5xl">LOGO</div>
          </div>

          <Typography
            sx={{ color: "white", p: 2, cursor: "pointer" }}
            onClick={handleDashboardClick}
          >
            <HomeOutlined style={{ paddingRight: "15px" }} />
            DashBoard
          </Typography>

          <Typography
            sx={{ color: "white", p: 2, cursor: "pointer", display: "flex" }}
            onClick={handleLeadClick}
          >
            <TeamOutlined style={{ paddingRight: "15px" }} />
            <Typography>Leads</Typography>
          </Typography>
        </Sider>

        <Layout>
          {/* 👉 Header */}

          <Header
            className="flex justify-between items-center"
            style={{
              background: "white",
            }}
          >
            <div class="flex items-center">
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

          <div className="flex justify-between items-center pl-2">
            <div>
              <IDropBox />
            </div>
            <div className="flex ">
              <button
                style={{
                  margin: "24px",
                }}
                type="button"
                class="py-2  px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  border-radius: 1.5rem;  rounded-lg w-36"
                onClick={handleDrawerClickd}
              >
                Add User
              </button>
            </div>
          </div>
          <Content
            style={{
              margin: 10,
              height: "auto",
            }}
          >
            <Routes>
              <Route path="/LeadPage" element={<LeadPage />} />
              <Route path="/DashboardPage" element={<ChartContents />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>

      <div class="flex-none w-60 shadow-xl m-1.5 ">
        <SideDrawer open={open} setOpen={setOpen} />
      </div>
    </>
  );
};
export default CheckHome;
