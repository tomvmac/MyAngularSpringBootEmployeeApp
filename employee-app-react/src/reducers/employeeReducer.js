import {
    GET_EMPLOYEES
  } from "../actions/types";
  
  const initialState = {
    employees: null
  };
  
  export default function(state = initialState, action) {
    console.log("action.payload", action.payload)
    switch (action.type) {
      case GET_EMPLOYEES:
        return {
          ...state,
          employees: action.payload
        };
      default:
        return state;
    }
  }
  