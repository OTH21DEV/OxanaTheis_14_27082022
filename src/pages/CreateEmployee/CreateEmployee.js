import React  from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

/**
 * Displays the page with the form to create employee
 * @returns {JSX}
 */
const CreateEmployee = () => {
  return (
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default CreateEmployee;
