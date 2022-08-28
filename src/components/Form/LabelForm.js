import React from "react";

const LabelForm = (props) => {
  return <label htmlFor={props.inputField}>{props.name}</label>;
};

export default LabelForm;
