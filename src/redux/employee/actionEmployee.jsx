import { ADD_EMPLOYEE } from "./type";
import propTypes from "prop-types";

/**
 * Add new employee action
 * @param {Object} data Contains employee information from form's inputs after form submit
 * @returns {Object}
 */
export const addEmployee = (data) => {
  return {
    type: ADD_EMPLOYEE,
    payload: data,
  };
};

addEmployee.propTypes={
  data: propTypes.object.isRequired
}