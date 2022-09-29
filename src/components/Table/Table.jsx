import React from "react";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import { useTable, useSortBy, usePagination, useGlobalFilter } from "react-table";
import "./table.css";

/**
 * Displays the table of current employees
 * @param {Array} data Data from form's inputs (state Redux)
 * @param {String} data[].firstName First name of employee
 * @param {String} data[].lasttName Last name of employee
 * @param {String} data[].streetName Street name of employee's address
 * @param {String} data[].cityName City of employee's address
 * @param {String} data[].zipCode Zip code of employee's address
 * @param {String} data[].selectDateBirth Date of birth of employee
 * @param {String} data[].selectStartDate Start day of employee
 * @param {Object} data[].selectDepartment Department of employee
 * @param {String} data[].selectDepartment.label Name of department
 * @param {String} data[].selectDepartment.value Value of department
 * @param {Object} data[].selectStates State of employee
 * @param {String} data[].selectStates.label Name of state
 * @param {String} data[].selectStates.value Value of state
 * @param {Array} columns Name of form's columns
 * @param {String} columns[].Header First group name header of form's columns
 * @param {Array} columns[].columns Second group name header of form's columns
 * @param {String} columns[].columns.Header Columns name of second group name header
 * @param {String} columns[].columns.accessor
 * @returns {JSX}
 */
function Table({ columns, data }) {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, header groupings
    page, // default value 10 rows
    setPageSize, //recat-table function to change the defalut value of rows per page (need to do the distructure of pageSize from state.After  we add a select in jsx )
    nextPage, //recat-table function - need to go to next page (need to add a btn with click event in jsx)
    previousPage, //recat-table function - need to go to prev page (need to add a btn with click event in jsx)
    canNextPage, //recat-table function - indicates if its possible  to go to next page (added in the btn property 'disabled')
    canPreviousPage, //recat-table function - indicates if its possible  to go to prev page (added in the btn property 'disabled')
    pageOptions, //recat-table function - indicates the number of pages and current page (need to do the distructure of pageIndex from state.After we add the span in jsx )
    gotoPage, //recat-table function - allows to go to last or first page (need to add another btn in jsx)
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div style={{ overflowX: "auto" }}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>{column.isSorted ? column.isSortedDesc ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i> : ""}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="wrapper-pagination">
        {/* displays the number of current page */}

        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>

          {/* displays the input to set the number of page to go */}

          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            ></input>
          </span>

          {/* displays the select with number of rows per page  */}

          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        {/* displays the btn to go to the first page */}
        <button className="btn-skipfirst" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>

        {/* displays the btns to navigate between the pages */}
        <button className="btn-prev" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button className="btn-next" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>

        {/* displays the btn to go to the last page */}
        <button className="btn-skiplast" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
}

export default Table;
