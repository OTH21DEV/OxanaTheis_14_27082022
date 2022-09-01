import React from "react";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import "../CreateEmployee/createEmployee.css";
import test from "../../assets/test.svg";

if (!localStorage.data || localStorage.length === 1) {
  console.log("error");
}

const CreateEmployee = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example"));
  //<ErrorForm fieldError={errors.lastName} />
  console.log(errors);

  ///



  return (
    <div>
      <Header />
      <div className="test">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="image">
            <h2>Create Employee</h2>
            <img src={test} alt=""></img>
          </div>
          <div className="wrapper-input">
            <label htmlFor="first-name">First Name</label>
            <input className="first-name" {...register("firstName", { required: "This field is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
            <p>{errors.firstName?.message}</p>
          </div>
          {/* Last Name */}

          <div className="wrapper-input">
            <label htmlFor="last-name">Last Name</label>
            <input className="last-name" {...register("lastName", { required: "This field is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
            <p>{errors.lastName?.message}</p>
          </div>
          <h3>Address</h3>
          {/* Street*/}
          <div className="wrapper-input">
            <label htmlFor="street-name">Street</label>
            <input className="street-name" {...register("streetName", { required: "This field is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
            <p>{errors.streetName?.message}</p>
          </div>
          {/* City*/}
          <div className="wrapper-input">
            <label htmlFor="city-name">City</label>
            <input className="city-name" {...register("cityName", { required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
            <p>{errors.cityName?.message}</p>
          </div>
          {/* Zip Code*/}
          <div className="wrapper-input">
            <label htmlFor="zip">Zip Code</label>
            <input className="zip" {...register("zipCode", { required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
            <p>{errors.zipCode?.message}</p>
          </div>

          {/* State v2*/}
          <div className="wrapper-dropdown">
            <div className="title">
              {" "}
              <p>States</p>
            </div>
            <Controller
              name="selectStates"
              control={control}
              defaultValue=""
              rules={{ required: "This is required", minLength: { value: 4, message: "Min length is 4 characters" } }}
              render={({ field }) => <Dropdown states={states} {...field} label="select" />}
            />
            <div className="error">
              <span>{errors.selectStates?.message}</span>
            </div>
          </div>

          {/* Department v2*/}
          <div className="wrapper-dropdown">
            <div className="title">
              {" "}
              <p>Department</p>
            </div>
            <Controller
              name="selectDepartment"
              control={control}
              defaultValue=""
              rules={{ required: "This is required", minLength: { message: "Min length is 4 characters" ,test:'ok'} }}
              render={({ field }) => <Dropdown states={departments} {...field} label="selectDepartment" />}
            />
            <div className="error">
              <span>{errors.selectDepartment?.message}</span>
            </div>
          </div>

          <div className="wrapper-btn">
            <input type="submit" className="btn" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEmployee;
