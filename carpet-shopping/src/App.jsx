import React from "react";
import ReactDOM from "react-dom";
import Home from './Pages/Home'

import "./index.css";

const App = () => (
  <div className="">
    <Home /> 
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
