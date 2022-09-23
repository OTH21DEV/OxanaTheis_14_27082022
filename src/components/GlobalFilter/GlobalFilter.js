import React from "react";
//filter-value of input , setFilter-
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search : {""}
      <input value={filter || ""} style={{ margin: "30px 0", outline: "none", borderImage: "linear-gradient(45deg, #3f3d56, #dbbc00) 1" }} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default GlobalFilter;
