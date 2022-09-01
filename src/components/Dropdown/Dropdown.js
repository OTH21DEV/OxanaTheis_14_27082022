import React, { useState, useEffect } from "react";
import Select from "react-select";

let dataDropdown = [];

const Dropdown = (props) => {
  if (dataDropdown.length > 0) {
    dataDropdown = [];
  }

  return (
    <div>
      <Select
        onChange={(choice) => {
          dataDropdown.push(choice.label);
          localStorage.setItem("data", dataDropdown);
        }}
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
        options={props.states}
      />
    </div>
  );
};

export default Dropdown;
