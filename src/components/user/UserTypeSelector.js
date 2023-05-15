import { MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserTypeSelector() {
  const [seletectedUser, setSelectedUser] = React.useState("");

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
    // handleChange(event.target.value, "category");
  };

  const { allEmployeeTypes } = useSelector(
    (store) => store.employeeTypeReducer
  );
  console.log(allEmployeeTypes);

  useEffect(() => {
    if (allEmployeeTypes.length > 0) {
      setSelectedUser(allEmployeeTypes[0]._id);
    }
  }, [allEmployeeTypes.length]);

  return (
    <div style={{ textAlign: "left", paddingTop: 20 }}>
      <Typography>Select Category</Typography>
      <Select
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
