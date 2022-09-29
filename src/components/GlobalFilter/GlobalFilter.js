import React from "react";
import propTypes from "prop-types";

/**
 * Displays the filter input
 * @param {String} filter Value of input (search area)
 * @param {Function} setFilter Set the value of input (search area)
 * @returns {JSX}
 */
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search : {""}
      <input value={filter || ""} style={{ margin: "30px 0", outline: "none", borderImage: "linear-gradient(45deg, #3f3d56, #dbbc00) 1" }} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

GlobalFilter.propTypes = {
  filter: propTypes.string.isRequired,
  setFilter: propTypes.func.isRequired,
};
export default GlobalFilter;
