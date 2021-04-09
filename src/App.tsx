import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/main.scss";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./pages/Users";
import Animal from './pages/Animal'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Animal</Link>
          <Link to="/users">Users</Link>
        </div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Animal />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
