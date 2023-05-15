import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export default function UserTypeSelector() {
  const [selectedUser, setSelectedUser] = React.useState("");

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const { allEmployeeTypes } = useSelector(
    (store) => store.employeeTypeReducer
  );

  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>Select Category</Typography>
      <Select
        value={selectedUser}
        onChange={handleChange}
        sx={{
          width: "300px",
          border: "2px solid #FD5C25",
          boxShadow: "none",
          outline: "none",
          "&:hover": {
            backgroundColor: "initial",
          },
          "&:focus": {
            backgroundColor: "initial",
            outline: "none",
          },
        }}
      >
        {allEmployeeTypes.length > 0 &&
          allEmployeeTypes.map((val, key) => {
            return (
              <MenuItem key={key} value={val._id}>
                {val.employeeType}
              </MenuItem>
            );
          })}
      </Select>
    </div>
  );
}
