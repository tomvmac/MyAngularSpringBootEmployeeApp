import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees } from "../../actions/employeeActions";
import EmployeeItem from "./EmployeeItem";


class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {

    const { employees } = this.props.employees;
    let employeeItems;

    if (employees != null){
        if (employees.length > 0){
            employeeItems = employees.map(employee => (
                <EmployeeItem key={employee.id} employee={employee} />
            ));
        }
    }

    return (
      <div>
        <h2>Employee List</h2>
        <br /><br />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          {employeeItems}
        </table>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  employees: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(
  mapStateToProps,
  { getEmployees }
)(EmployeeList);
