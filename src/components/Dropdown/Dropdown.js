import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import "../Form/form.css";
import propTypes from "prop-types";

/**
 * Displays the dropdown in the department and states input fields
 * @param {String} title Title of the field
 * @param {String} name Name of the input field to control
 * @param {Object} control
 * @param {Object} errors
 * @param {Array} data Data contains the states or departments list
 * @param {String} data[].label Data contains the given label (appear in the input field)
 * @param {String} data[].value Data contains the given value
 * @returns {JSX}
 */
const Dropdown = ({ title, name, control, errors, data }) => {
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
          rules={{ required: "This field is required", minLength: { message: "Min length is 4 characters", test: "ok" } }}
          render={({ field }) => (
            <Select
              menuPortalTarget={document.querySelector("body")}
              placeholder="Please select"
              styles={{
                placeholder: () => ({
                  textAlign: "left",
                  opacity: "0.6",
                  marginTop: "30px",
                }),

                valueContainer: () => ({
                  maxHeight: "80px",
                  display: "flex",
                }),

                indicatorSeparator: () => ({
                  border: "none",
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  "&:hover": {
                    color: "#4F5C1C",
                  },
                  color: "#4F5C1C",
                  marginTop: "30px",
                }),
                singleValue: () => ({
                  textAlign: "left",
                  marginTop: "30px",
                }),
                container: () => ({
                  display: "flex",
                  justifyContent: "center",
                }),

                control: (provided, state) => ({
                  ...provided,
                  "&:hover": {
                    borderColor: "#4F5C1C",
                  },
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "",
                  borderBottom: "2px",
                  borderBottomStyle: "solid",
                  borderImage: "linear-gradient(45deg, #3F3D56,#dbbc00) 1",
                  width: "60%",
                  borderRadius: "none",
                  minHeight: "32px",
                  position: "relative",
                  marginTop: "-20px",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                }),
                menuList: (provided, state) => ({
                  ...provided,
                  "::-webkit-scrollbar": {
                    width: "4px",
                    height: "0px",
                  },
                  "::-webkit-scrollbar-track": {
                    background: "#f1f1f1",
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "#888",
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                  },
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused && "#9BC200",
                  color: state.isFocused && "white",
                }),
              }}
              options={data}
              {...field}
              label="Text field"
            />
          )}
        />

        <div className="error">
          {" "}
          <h4>{errors[name]?.message}</h4>
        </div>
      </div>
    </>
  );
};

Dropdown.propTypes = {
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
  data: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.string,
    })
  ).isRequired,
};
export default Dropdown;
