import React from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import "../Form/form.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import propTypes from "prop-types";

/**
 * Displays the calendar in the date birth and start date input fields
 * @param {String} title Title of the field
 * @param {String} name Name of the input field to control
 * @param {Object} control
 * @param {Object} errors
 * @returns {JSX}
 */
const Datepicker = ({ title, name, control, errors }) => {
  return (
    <>
      <div className="wrapper-dropdown">
        <div className="title">
          {" "}
          <p>{title}</p>
        </div>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <DatePicker
              placeholderText="xx/xx/xxxx "
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              showYearDropdown
              dateFormatCalendar="MMMM"
              yearDropdownItemNumber={15}
              dateFormat="dd/MM/yyyy"
              filterDate={(d) => {
                if (name === "selectDateBirth") {
                  return new Date() > d;
                } else {
                  return new Date();
                }
              }}
              scrollableYearDropdown
              label="Text field"
            />
          )}
        />
        <div className="error">
          <h4>{errors[name]?.message}</h4>
        </div>
      </div>
    </>
  );
};

Datepicker.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  control: propTypes.object.isRequired,
  errors: propTypes.shape({
    firstName: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    lastName: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    selectDateBirth: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    selectDepartment: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    SelectStartDate: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    selectStates: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    streetName: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
    zipCode: propTypes.shape({
      type: propTypes.string,
      message: propTypes.string,
    }),
  }),
};
export default Datepicker;
