import React, { Component } from "react";
import PropTypes from "prop-types";

class EmployeeItem extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { employee } = this.props;


    return (
        <tbody>
                <tr >
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                </tr>
        </tbody>
      );
    }
}

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeItem;
