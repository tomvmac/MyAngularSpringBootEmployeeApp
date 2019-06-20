import {
    GET_EMPLOYEES
  } from "./types";

import axios from "axios";


// Get employees
export const getEmployees = () => dispatch => {
    axios
      .get("http://localhost:8080/employees")
      .then(res =>
        dispatch({
          type: GET_EMPLOYEES,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_EMPLOYEES,
          payload: null
        })
      );
  };