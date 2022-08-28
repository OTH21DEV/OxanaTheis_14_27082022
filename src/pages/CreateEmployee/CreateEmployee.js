import React from "react";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import { useForm } from "react-hook-form";
import LabelForm from "../../components/Form/LabelForm";
import InputForm from "../../components/Form/InputForm";
import ErrorForm from "../../components/Form/ErrorForm";
import "../CreateEmployee/createEmployee.css";

const CreateEmployee = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  //<ErrorForm fieldError={errors.lastName} />
  console.log(errors);
  return (
    <div>
      <Header />
      <h2>Create Employee</h2>
      <form className='form'onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        
        <div className="wrapper-first-name">
        <label htmlFor="first-name">First Name</label>
        <input className="first-name" {...register("firstName", { required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
        <p>{errors.firstName?.message}</p>
     
</div>
        {/* Last Name */}
        <label htmlFor="last-name">Last Name</label>
        <input className="last-name" {...register("lastName", { required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
        <p>{errors.lastName?.message}</p>

        <h3>Address</h3>
        {/* Street*/}
        <label htmlFor="street-name">Street</label>
        <input className="street-name" {...register("streetName", { required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
        <p>{errors.streetName?.message}</p>

        {/* City*/}
        <label htmlFor="city-name">City</label>
        <input className="city-name" {...register("cityName", { required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
        <p>{errors.cityName?.message}</p>

        {/* State*/}
        <Dropdown states={states} />

        {/* Zip Code*/}

        {/* Department*/}
        <Dropdown states={departments} />

        <input type="submit" />
      </form>
      <Footer />
    </div>
  );
};

export default CreateEmployee;
