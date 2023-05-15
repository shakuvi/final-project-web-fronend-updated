import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import UserInputBoxWithLabel from "../../../components/user/UserInputBoxWithLabel";
import UserAddButton from "../../../components/user/UserAddButton";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  setUserSelectedEmployee,
  updateEmployee,
} from "../../../store/actions/employeeAction";

export default function UserDetails() {
  const dispatch = useDispatch();
  const { userSelectedEmployee, token } = useSelector(
    (store) => store.employeeReducer
  );

  const handleUserChange = (value, name) => {
    dispatch(
      setUserSelectedEmployee({ ...userSelectedEmployee, [name]: value })
    );

    console.log(name);
    console.log(value);
  };

  const handleClick = () => {
    console.log(userSelectedEmployee);
    if (userSelectedEmployee._id) {
      dispatch(updateEmployee(userSelectedEmployee, token));
    } else {
      dispatch(createEmployee(userSelectedEmployee, token));
    }
  };

  console.log(userSelectedEmployee);
  return (
    <div style={{ textAlign: "center" }}>
      <Typography sx={{ color: "#FD5C25" }}>Add User</Typography>
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
          <div style={{ paddingTop: 30 }}>
            <UserAddButton handleClick={handleClick} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
