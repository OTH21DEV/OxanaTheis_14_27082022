import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employee/actionEmployee";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import icon_form from "../../assets/test.svg";
import "../Form/form.css";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal-oth";
import icon from "react-modal-oth/dist/assets/icon.svg";
import close_icon from "react-modal-oth/dist/assets/close.svg";
import moment from "moment";

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
    if (data) {
      dispatch(addEmployee(data));
      setModalIsOpen(true);
    }
  };
  //  return new Date() > d;
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
              <div className="wrapper-dropdown">
                <div className="title">
                  {" "}
                  <p>Date of Birth</p>
                </div>
                <Controller
                  name="selectDateBirth"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="xx/xx/xxxx "
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      yearDropdownItemNumber={15}
                      dateFormat="dd/MM/yyyy"
                      filterDate={(d) => {
                        return new Date() > d;
                      }}
                      scrollableYearDropdown
                      label="Text field"
                    />
                  )}
                />

                <div className="error">
                  <h4>{errors.selectDateBirth?.message}</h4>
                </div>
              </div>

              {/* Start date*/}
              <div className="wrapper-dropdown">
                <div className="title">
                  {" "}
                  <p>Start Date</p>
                </div>
                <Controller
                  name="selectStartDate"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="xx/xx/xxxx "
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      yearDropdownItemNumber={15}
                      dateFormat="dd/MM/yyyy"
                      scrollableYearDropdown
                      label="Text field"
                    />
                  )}
                />
                <div className="error">
                  <h4>{errors.selectStartDate?.message}</h4>
                </div>
              </div>

              {/* Department*/}
              <div className="wrapper-dropdown">
                <div className="title">
                  {" "}
                  <p>Department</p>
                </div>
                <Controller
                  name="selectDepartment"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required", minLength: { message: "Min length is 4 characters", test: "ok" } }}
                  render={({ field }) => (
                    <Select
                      menuPortalTarget={document.querySelector("body")}
                      placeholder="Please select"
                      styles={{
                        placeholder: () => ({
                          textAlign: "left",
                          opacity: "0.6",
                          marginTop: "30px",
                        }),

                        valueContainer: () => ({
                          maxHeight: "80px",
                          display: "flex",
                        }),

                        indicatorSeparator: () => ({
                          border: "none",
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          "&:hover": {
                            color: "#4F5C1C",
                          },
                          color: "#4F5C1C",
                          marginTop: "30px",
                        }),
                        singleValue: () => ({
                          textAlign: "left",
                          marginTop: "30px",
                        }),
                        container: () => ({
                          display: "flex",
                          justifyContent: "center",
                        }),

                        control: (provided, state) => ({
                          ...provided,
                          "&:hover": {
                            borderColor: "#4F5C1C",
                          },
                          boxShadow: "none",
                          border: "none",
                          backgroundColor: "",
                          borderBottom: "2px",
                          borderBottomStyle: "solid",
                          borderImage: "linear-gradient(45deg, #3F3D56,#dbbc00) 1",
                          width: "60%",
                          borderRadius: "none",
                          minHeight: "32px",
                          position: "relative",
                          marginTop: "-20px",
                        }),
                        menu: (provided, state) => ({
                          ...provided,
                          border: "none",
                          boxShadow: "none",
                        }),
                        menuList: (provided, state) => ({
                          ...provided,
                          "::-webkit-scrollbar": {
                            width: "4px",
                            height: "0px",
                          },
                          "::-webkit-scrollbar-track": {
                            background: "#f1f1f1",
                          },
                          "::-webkit-scrollbar-thumb": {
                            background: "#888",
                          },
                          "::-webkit-scrollbar-thumb:hover": {
                            background: "#555",
                          },
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isFocused && "#9BC200",
                          color: state.isFocused && "white",
                        }),
                      }}
                      options={departments}
                      {...field}
                      label="Text field"
                    />
                  )}
                />
                <div className="error">
                  {" "}
                  <h4>{errors.selectDepartment?.message}</h4>
                </div>
              </div>

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

              {/* State*/}
              <div className="wrapper-dropdown">
                <div className="title">
                  {" "}
                  <p>States</p>
                </div>
                <Controller
                  name="selectStates"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required", minLength: { value: 4, message: "Min length is 4 characters" } }}
                  render={({ field }) => (
                    <Select
                      menuPortalTarget={document.querySelector("body")}
                      placeholder="Please select"
                      styles={{
                        placeholder: () => ({
                          textAlign: "left",
                          opacity: "0.6",
                          marginTop: "30px",
                        }),

                        valueContainer: () => ({
                          maxHeight: "80px",
                          display: "flex",
                        }),

                        indicatorSeparator: () => ({
                          border: "none",
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          "&:hover": {
                            color: "#4F5C1C",
                          },
                          color: "#4F5C1C",
                          marginTop: "30px",
                        }),
                        singleValue: () => ({
                          textAlign: "left",
                          marginTop: "30px",
                        }),
                        container: () => ({
                          display: "flex",
                          justifyContent: "center",
                        }),

                        control: (provided, state) => ({
                          ...provided,
                          "&:hover": {
                            borderColor: "#4F5C1C",
                          },
                          boxShadow: "none",
                          border: "none",
                          backgroundColor: "",
                          borderBottom: "2px",
                          borderBottomStyle: "solid",
                          borderImage: "linear-gradient(45deg, #3F3D56,#dbbc00) 1",
                          width: "60%",
                          borderRadius: "none",
                          minHeight: "32px",
                          position: "relative",
                          marginTop: "-20px",
                        }),
                        menu: (provided, state) => ({
                          ...provided,
                          border: "none",
                          boxShadow: "none",
                        }),
                        menuList: (provided, state) => ({
                          ...provided,
                          "::-webkit-scrollbar": {
                            width: "4px",
                            height: "0px",
                          },
                          "::-webkit-scrollbar-track": {
                            background: "#f1f1f1",
                          },
                          "::-webkit-scrollbar-thumb": {
                            background: "#888",
                          },
                          "::-webkit-scrollbar-thumb:hover": {
                            background: "#555",
                          },
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isFocused && "#9BC200",
                          color: state.isFocused && "white",
                        }),
                      }}
                      options={states}
                      {...field}
                      label="Text field"
                    />
                  )}
                />
                <div className="error">
                  <h4>{errors.selectStates?.message}</h4>
                </div>
              </div>

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
