import React, { useMemo } from "react";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";

const CurrentEmployees = () => {
  const state = useSelector((state) => state.employeeData);
  console.log(state);

  const columns = useMemo(() => [
    {
      Header: "Identity",
      // First group columns
      columns: [
        {
          Header: "First name",
          accessor: "firstName",
          cell: (info) => console.log(info),
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
        {
          Header: "Date of Birth",
          accessor: "dateOfBirth",
        },
      ],
    },
    {
      Header: "Address",

      columns: [
        {
          Header: "Zip code",
          accessor: "zipCode",
        },
        {
          Header: "City",
          accessor: "city",
        },
        
        {
          Header: "Street",
          accessor: "street",
        },
        {
          Header: "States",
          accessor: "state.label",
        },
      ],
    },
    {
      Header: "Additional information",

      columns: [
        {
          Header: "Start date",
          accessor: "startDate",
        },
        {
          Header: "Department",
          accessor: "department.label",
        },
      ],
    },
  ]);

  return (
    <>
      <Header />
      <Table columns={columns} data={state} />
      <Footer />
    </>
  );
};

export default CurrentEmployees;
