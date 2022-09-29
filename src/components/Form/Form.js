import React, { useState } from "react";
import { useForm} from "react-hook-form";
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

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //getting state of User (data) from redux store
  const state = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  //add employee
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      dispatch(addEmployee(data));
      setModalIsOpen(true);
    }
  };

  //if modal is open set as true , modal is shown, otherwise back to form

  return (
    <>
      {" "}
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
