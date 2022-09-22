import React from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter,
  useAsyncDebounce, } from "react-table";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import './table.css'

function Table({ columns, data }) {
  console.log(data);
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
     useGlobalFilter,useSortBy,
  );

  //FIlter by name
/*
const [filterInput, setFilterInput] = useState("");

 const handleFIlterChange = e =>{
  const value = e.target.value || undefined;
  setFilter("firstName",value)
  setFilterInput(value)
 }
 */
//<input value={filterInput} onChange={handleFIlterChange} placeholder={'Search here'}></input>

//Global filter

//function Global

const {globalFilter} = state
  return (
<>

 <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
        {rows.map((row, i) => {
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
    </>
  );
}

export default Table;
