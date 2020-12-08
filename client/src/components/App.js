import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideNav from "./SideNav";
import Landing from "../pages/Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <SideNav />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
