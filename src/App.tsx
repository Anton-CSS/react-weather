import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './style/index.scss';
import MonthStatistics from "./pages/Monthstatistics/components/MonthStatistics";
import Home from "./pages/home/components/Home";
import Header from "./shared/Header/Header";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/month" component={MonthStatistics} exact/>
                  <Redirect to="/"/>
              </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
