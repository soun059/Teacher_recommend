import React from "react";
import LoginPageCont from "./containers/loginPage";
import DashBoard from "./containers/DashBoard_cont";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <DashBoard></DashBoard>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/login"}>
          <LoginPageCont></LoginPageCont>
        </Route>
      </Router>
    </div>
  );
}

export default App;
