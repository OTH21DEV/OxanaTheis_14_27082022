import { ADD_EMPLOYEE } from "./type";
import moment from "moment";

const initialState = {
  employees: [],
};

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

const reducerAddEmployee = (state = initialState.employees, action) => {
  // au moment de montage de composant on verifie si il y a de données dans localStorage
  //si oui - on les recupere et on attribue au state

  if (localStorage.getItem("allEmployees")) {
    state = JSON.parse(localStorage.getItem("allEmployees"));
  }

  switch (action.type) {
    case ADD_EMPLOYEE:
      //  on genere un nouveau state == aux données recuperees
      state = [...state, helperAddEmployee(action)];
      localStorage.setItem("allEmployees", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
export default reducerAddEmployee;
