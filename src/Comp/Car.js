import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicTextFields from "./New";
import CheckForm2 from "./CheckForm2";
import CheckForm3 from "./CheckForm3";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { useState } from "react";
import Random from "./Random";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const [datas, setDatas] = useState({});
  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  console.log(datas, "check");
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} aria-label="basic tabs example">
          <Tab
            icon={<LeaderboardIcon />}
            label="Leads"
            sx={{ marginRight: 4, marginLeft: 15 }}
            {...a11yProps(0)}
          />
          <Tab
            label="Client"
            icon={<PeopleAltIcon />}
            sx={{ marginRight: 4 }}
            {...a11yProps(1)}
          />
          <Tab
            label="Management"
            icon={<PlaylistAddCheckIcon />}
            sx={{ marginRight: 4 }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Random setvalue={setValue} setDatas={setDatas} datas={datas} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CheckForm2 setvalue={setValue} setDatas={setDatas} datas={datas} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CheckForm3 setvalue={setValue} setDatas={setDatas} datas={datas} onClose={props.onClose} />
      </TabPanel>
    </Box>
  );
}
