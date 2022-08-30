import React from "react";
import Select from "react-select";

/*


container:()=> ({
  display:'flex',
  justifyContent:'center'
  
      }),
*/
const Dropdown = (props) => {
 
  
  return (
    <div>
      <Select styles={{

      placeholder:()=> ({
        textAlign:'left'
        
            }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border:  "none",
      backgroundColor:"",
      borderBottom:'2px solid #4F5C1C',
      width:'60%',
      borderRadius:'none',
     
    }),
    menu: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none"
    }),
    option: (provided, state) => ({
       ...provided,
       backgroundColor: state.isFocused && "#9BC200",
       color: state.isFocused && "white"
    })
  }}options={props.states} />
    </div>
  );
};

export default Dropdown;
