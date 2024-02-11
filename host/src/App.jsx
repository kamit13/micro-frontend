import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import Home from 'carpet_shopping/Home'
import Header from 'header_container/Header'
import "./index.css";
import { BrowserRouter} from "react-router-dom";


const App = () => (
    <Suspense fallback={<>Loading...</>}>
     
    <div>
    <BrowserRouter>

      <Header />
      <Home />
    </BrowserRouter>
  </div>
    </Suspense>
);
ReactDOM.render(<App />, document.getElementById("app"));
