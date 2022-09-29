import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employee/actionEmployee";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import Datepicker from "../Date/Date";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "react-modal-oth";
import icon from "react-modal-oth/dist/assets/icon.svg";
import close_icon from "react-modal-oth/dist/assets/close.svg";
import icon_form from "../../assets/test.svg";
import "../Form/form.css";
import "react-datepicker/dist/react-datepicker.css";
import propTypes from "prop-types";

/**
 * Displays the form to create a new employee
 * @returns {JSX}
 */
const Form = () => {
  //Use state to manage the modal's appears
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //const state = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  /**
   * Adds employee on submit
   * @param {Object} data Data from form's inputs
   * @param {String} data.firstName First name of employee
   * @param {String} data.lasttName Last name of employee
   * @param {String} data.streetName Street name of employee's address
   * @param {String} data.cityName City of employee's address
   * @param {String} data.zipCode Zip code of employee's address
   * @param {Object} data.selectDateBirth Date of birth of employee
   * @param {Object} data.selectStartDate Start day of employee
   * @param {Object} data.selectDepartment Department of employee
   * @param {String} data.selectDepartment.label Name of department
   * @param {String} data.selectDepartment.value Value of department
   * @param {Object} data.selectStates State of employee
   * @param {String} data.selectStates.label Name of state
   * @param {String} data.selectStates.value Value of state
   */
  const onSubmit = (data) => {
    if (data) {
      dispatch(addEmployee(data));
      setModalIsOpen(true);
    }
  };

  return (
    <>
      {" "}
      {/*if modal is open set as true , modal is shown, otherwise back to form */}
      {modalIsOpen ? (
        <Modal icon={icon} closeIcon={close_icon} show={modalIsOpen} setShow={setModalIsOpen} title={"Well done!"} text={"Employee was successfully created!"} />
      ) : (
        <div className="testform">
          <div className="wrapper-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              {/* First Name */}
              <div className="image">
                <h2>Create Employee</h2>
                <img src={icon_form} alt=""></img>
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
              {/* Date of Birth */}

              <Datepicker title={"Date of Birth"} name={"selectDateBirth"} control={control} errors={errors} />

              {/* Start date */}

              <Datepicker title={"Start Date"} name={"selectStartDate"} control={control} errors={errors} />
              {/* Dropdown departments*/}

              <Dropdown title={"Department"} name={"selectDepartment"} control={control} errors={errors} data={departments} />

              {/* Title*/}
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
                <input className="city-name" {...register("cityName", { required: "This field is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
                <p>{errors.cityName?.message}</p>
              </div>
              {/* Zip Code*/}
              <div className="wrapper-input">
                <label htmlFor="zip">Zip Code</label>
                <input className="zip" {...register("zipCode", { required: "This field is required", minLength: { value: 4, message: "Min length is 4 characters" } })} />
                <p>{errors.zipCode?.message}</p>
              </div>

              {/* Dropdown states*/}

              <Dropdown title={"States"} name={"selectStates"} control={control} errors={errors} data={states} />

              <div className="wrapper-btn">
                <input
                  type="submit"
                  className="btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
