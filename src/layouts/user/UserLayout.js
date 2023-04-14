import React from "react";
import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import HomeHeaderWithUserDetails from "../common/homelayout/HomeHeaderWithUserDetails";
import UserPopUpDialog from "./userlayout/UserPopUpDialog";
import TopBarButton from "../../components/common/TopBarButton";

const rows = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];

export default function UserLayout() {
  const [selectedRow, setSelectedRow] = React.useState(null);

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
        info={{ label: "Users" }}
        isEditVisible={<TopBarButton />}
      />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Date of birth
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Order Type</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Mobile Number
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((val, key) => (
              <TableRow
                key={key}
                hover
                onClick={() => {
                  setSelectedRow(val);
                  handleClickOpen();
                }}
                style={
                  selectedRow === val ? { backgroundColor: "#FD5C25" } : {}
                }
              >
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Name</TableCell>
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
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <UserPopUpDialog />
      </Dialog>
    </div>
  );
}
