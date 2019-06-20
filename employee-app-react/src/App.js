import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Components
import EmployeeList from './components/employee/EmployeeList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <h1>Welcome to the Employee App (React Js)</h1>
            {/* <Route exact path="/" component={Landing} /> */}
            <div className="container">
              <Route exact path="/employees" component={EmployeeList} />
              <Link to="/employees" className="btn btn-light">
              <i className="fas fa-user-circle text-info mr-1" /> Employees
            </Link>
            </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;

