import React from "react";

import "./App.css";
import WebcamCapture from "./webCam/WebcamCapture";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
          <Switch>
            <Route exact path="/">
              <WebcamCapture></WebcamCapture>
            </Route>
            <Route path="/preview">
              <Preview></Preview>
            </Route>
            <Route path="/chats">
              <Chats></Chats>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
