import { ADD_EMPLOYEE } from "./type";
import moment from "moment";
import propTypes from "prop-types";

const initialState = {
  employees: [],
};

/**
 * Helper function aiming to take the employee data
 * @param {Object} action
 * @returns {Object}
 */
const helperAddEmployee = (action) => {
  return {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    dateOfBirth: moment(action.payload.selectDateBirth).format("DD/MM/yyyy"),
    startDate: moment(action.payload.selectStartDate).format("DD/MM/yyyy"),
    department: action.payload.selectDepartment,
    street: action.payload.streetName,
    city: action.payload.cityName,
    zipCode: action.payload.zipCode,
    state: action.payload.selectStates,
  };
};

/**
 * Reducer for employee action (addEmployee)
 * @param {Object} state State is equal to initial state ([])
 * @param {Object} action Action add employee
 * @param {String} action.type type of action (addEmployee)
 * @param {Object} action.payload contains employee information received from form'inputs after submit
 * @param {String} action.payload.firstName contains employee first name received from form input after submit
 * @param {String} action.payload.lastName contains employee last name received from form input after submit
 * @param {String} action.payload.selectDateBirth contains employee date of birth received from form input after submit
 * @param {String} action.payload.selectStartDate contains employee start date received from form input after submit
 * @param {Object} action.payload.selectDepartment contains employee department received from form input after submit
 * @param {String} action.payload.selectDepartment.label contains employee department label
 * @param {String} action.payload.selectDepartment.value contains employee department value
 * @param {String} action.payload.streetName contains employee street name received from form input after submit
 * @param {String} action.payload.cityName contains employee city name received from form input after submit
 * @param {String} action.payload.zipCode contains employee zip code received from form input after submit
 * @param {Object} action.payload.selectStates contains employee state received from form input after submit
 * @param {String} action.payload.selectStates.label contains employee state label
 * @param {String} action.payload.selectStates.value contains employee state value
 * @returns {Object} new State
 */
const reducerAddEmployee = (state = initialState.employees, action) => {
  /*when component is mounting we check if there is a data in local storage , if so we take it from there and 
attribute  to state
*/
  if (localStorage.getItem("allEmployees")) {
    state = JSON.parse(localStorage.getItem("allEmployees"));
  }

  switch (action.type) {
    case ADD_EMPLOYEE:
      //Creating the new state with received data
      state = [...state, helperAddEmployee(action)];
      localStorage.setItem("allEmployees", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};

reducerAddEmployee.propTypes = {
  state: propTypes.object.isRequired,
  action: propTypes.shape({
    type: propTypes.string.isRequired,
    payload: propTypes.shape({
      firstName: propTypes.string,
      lastName: propTypes.string,
      selectDateBirth: propTypes.string,
      selectStartDate: propTypes.string,
      selectDepartment: propTypes.shape({
        label: propTypes.string,
        value: propTypes.string,
      }),
      streetName: propTypes.string,
      cityName: propTypes.string,
      zipCode: propTypes.string,
      selectStates: propTypes.shape({
        label: propTypes.string,
        value: propTypes.string,
      }),
    }),
  }).isRequired,
};
export default reducerAddEmployee;
