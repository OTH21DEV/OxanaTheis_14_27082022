import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Date =()=>{
 const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  showYearDropdown
    dateFormatCalendar="MMMM"
    yearDropdownItemNumber={15}
    scrollableYearDropdown />
  );
};

export default Date