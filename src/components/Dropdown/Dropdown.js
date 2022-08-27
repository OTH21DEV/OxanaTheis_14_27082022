import React from "react";
import Select from "react-select";


const Dropdown = (props) => {

  return (
    <div>
      <Select options={props.states} />
    </div>
  );
};

export default Dropdown;
