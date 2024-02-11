import React from "react";
import ReactDOM from "react-dom";
import Header from './Pages/Header'
import "./index.css";
import { BrowserRouter} from "react-router-dom";

const App = () => (
  <BrowserRouter>
  <Header />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
