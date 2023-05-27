import React from "react";
import {
  Dialog,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import UserDetails from "./userlayout/UserDetails";
import {
  clearCreateEmployeeLoadingStatus,
  setUserSelectedEmployee,
  userEditFalse,
  userEditTrue,
} from "../../store/actions/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import UserDetailsAdd from "./userlayout/UserDetailsAdd";
import { getAllEmployeeTypes } from "../../store/actions/employeeTypeAction";

export default function UserLayout({ info: rows, handleClearLoadingStatus }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const { employeeEdit } = useSelector((store) => store.employeeReducer);

  console.log(employeeEdit);

  const handleClickOpen = (employee) => {
    setOpen(true);
    dispatch(userEditFalse());
    dispatch(setUserSelectedEmployee(employee));
    dispatch(clearCreateEmployeeLoadingStatus());
  };

  const handleAddNewUser = () => {
    setOpen(true);
    dispatch(userEditTrue());
    dispatch(
      setUserSelectedEmployee({
        userName: "",
        mobileNumber: "",
        email: "",
        password: "",
        dateOfBirth: "",
        employeeType: "",
      })
    );
    dispatch(clearCreateEmployeeLoadingStatus());
    dispatch(getAllEmployeeTypes());
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails
        label="Users"
        buttonName="Add New User"
        isEditVisible
        handleClickOpen={handleAddNewUser}
      />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                ID
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Mobile Number
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Date of birth
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Employee Type
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((val, key) => (
              <TableRow key={key}>
                <TableCell sx={{ fontFamily: "Poppins" }}>{val._id}</TableCell>
                <TableCell sx={{ fontFamily: "Poppins" }}>
                  {val.firstName + " " + val.lastName}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins" }}>
                  {val.email}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins" }}>
                  {val.mobileNumber}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins" }}>
                  {val.dateOfBirth}
                </TableCell>
                <TableCell>{val.employeeType.employeeType}</TableCell>
                <TableCell>
                  <Grid container justifyContent="space-around">
                    <Grid item>
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          handleClickOpen(val);
                          handleClearLoadingStatus();
                        }}
                      >
                        <EditOutlinedIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton color="primary">
                        <DeleteSweepOutlinedIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "80%",
            height: "90%",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {employeeEdit === true ? (
          <UserDetailsAdd />
        ) : employeeEdit === false ? (
          <UserDetails />
        ) : (
          ""
        )}
      </Dialog>
    </div>
  );
}
