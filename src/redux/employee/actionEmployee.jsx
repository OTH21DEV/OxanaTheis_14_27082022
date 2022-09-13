import { ADD_EMPLOYEE } from "./type";

//va contenir employee information from form submit
export const addEmployee = (data) => {
  return {
    type: ADD_EMPLOYEE,
    payload: data,
  };
};
