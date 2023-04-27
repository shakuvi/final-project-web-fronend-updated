import React from "react";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

export default function FoodLayout({ rows }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{ backgroundColor: "#FFF2F2", height: "100vh", textAlign: "left" }}
    >
      <HomeHeaderWithUserDetails
        label="Food"
        buttonName="Add New"
        isEditVisible
      />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Mobile Number
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Date of birth
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((val, key) => (
              <TableRow key={key}>
                <TableCell>{val._id}</TableCell>
                <TableCell>{val.firstName + " " + val.lastName}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.mobileNumber}</TableCell>
                <TableCell>{val.dateOfBirth}</TableCell>
                <TableCell>
                  <Grid container justifyContent="space-around">
                    <Grid item>
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          handleClickOpen();
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
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="xl"
          PaperProps={{
            style: {
              width: "80%",
              height: "80%",
            },
          }}
        ></Dialog>
      </div>
    </div>
  );
}
