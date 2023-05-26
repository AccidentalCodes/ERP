import { Calendar, Table } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from "./Comp/MainContainer";
import Home from "./Home";
import Tabs from "./Component/Tabs";

import Tabb from "./Component/Table";
import NewBody from "./Component/NewBody";
import Chart_1 from "./Component/Chart_1";
import BasicTextFields from "./Comp/New";
import CheckHome from "./Comp/CheckHome";
import CheckForm2 from "./Comp/CheckForm2";
import CheckForm3 from "./Comp/CheckForm3";
import Car from "./Comp/Car";
import ChartContent from "./Component/ChartContent";
import Random from "./Comp/Random";
import ChartContents from "./MainComp/ChartContents";
import MainTable from "./Comp/MainTable";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<MainContainer />} /> */}
          {/* <Route path="/" element={<Chart_1 />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/test" element={<BasicTextFields />} /> */}
          <Route path="/*" element={<CheckHome />} />
          <Route path="/b" element={<BasicTextFields />} />
          <Route path="/b2" element={<CheckForm2 />} />
          <Route path="/b3" element={<CheckForm3 />} />
          <Route path="/b4" element={<Car />} />
          <Route path="/b5" element={<ChartContent />} />
          <Route path="/b6" element={<Chart_1 />} />
          <Route path="/b7" element={<Random />} />
          <Route path="/b8" element={<ChartContents />} />
          <Route path="/b9" element={<MainTable />} />
          <Route path="/10" element={<Tabb />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
