import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ParticlesContainer } from "./components/particles";
import SideNav from "./components/SideNav";
import Landing from "./pages/Landing";
import Services from "./pages/Services";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ParticlesContainer />
        <div className="page-wrapper">
          <Route exact path="/" component={Landing} />
          <Route exact path="/services" component={Services} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
