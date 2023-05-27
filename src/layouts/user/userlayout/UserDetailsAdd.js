import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  setUserSelectedEmployee,
  updateEmployee,
} from "../../../store/actions/employeeAction";
import { Avatar, Grid, Typography } from "@mui/material";
import UserInputBoxWithLabel from "../../../components/user/UserInputBoxWithLabel";
import UserAddButton from "../../../components/user/UserAddButton";
import UserTypeSelector from "../../../components/user/UserTypeSelector";

export default function UserDetailsAdd() {
  const dispatch = useDispatch();
  const { userSelectedEmployee, token } = useSelector(
    (store) => store.employeeReducer
  );

  const [errorMessage, setErrorMessage] = useState("");

  const handleUserChange = (value, name) => {
    dispatch(
      setUserSelectedEmployee({ ...userSelectedEmployee, [name]: value })
    );

    console.log(name);
    console.log(value);
  };

  const handleClick = () => {
    if (
      !userSelectedEmployee.firstName ||
      !userSelectedEmployee.userName ||
      !userSelectedEmployee.mobileNumber ||
      !userSelectedEmployee.email ||
      !userSelectedEmployee.lastName ||
      !userSelectedEmployee.password ||
      !userSelectedEmployee.dateOfBirth
    ) {
      setErrorMessage("Text fields cannot be null.");
      return;
    }

    setErrorMessage("");

    if (userSelectedEmployee._id) {
      dispatch(updateEmployee(userSelectedEmployee, token));
    } else {
      dispatch(createEmployee(userSelectedEmployee, token));
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{ color: "#FD5C25", fontFamily: "Poppins" }}>
        Add User
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <Grid container spacing={2}>
        <Grid item>
          <UserInputBoxWithLabel
            fieldname="First Name"
            value={userSelectedEmployee.firstName}
            handleChange={handleUserChange}
            name="firstName"
          />
          <UserInputBoxWithLabel
            fieldname="User Name"
            value={userSelectedEmployee.userName}
            handleChange={handleUserChange}
            name="userName"
          />
          <UserInputBoxWithLabel
            fieldname="Phone Number"
            value={userSelectedEmployee.mobileNumber}
            handleChange={handleUserChange}
            name="mobileNumber"
          />
          <UserInputBoxWithLabel
            fieldname="Email Address"
            value={userSelectedEmployee.email}
            handleChange={handleUserChange}
            name="email"
          />
        </Grid>
        <Grid item>
          <UserInputBoxWithLabel
            fieldname="Last Name"
            value={userSelectedEmployee.lastName}
            handleChange={handleUserChange}
            name="lastName"
          />
          <UserInputBoxWithLabel
            password="password"
            fieldname="Password"
            value={userSelectedEmployee.password}
            handleChange={handleUserChange}
            name="password"
          />
          <UserInputBoxWithLabel
            fieldname="Date of Birth"
            value={userSelectedEmployee.dateOfBirth}
            handleChange={handleUserChange}
            name="dateOfBirth"
          />
          <UserTypeSelector handleUserChange={handleUserChange} />
        </Grid>
      </Grid>
      <Typography>{errorMessage ? errorMessage : ""}</Typography>
      <div style={{ paddingTop: 20 }}>
        <UserAddButton handleClick={handleClick} />
      </div>
    </div>
  );
}
