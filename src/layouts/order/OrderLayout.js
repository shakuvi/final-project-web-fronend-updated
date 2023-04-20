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
import OrderDetails from "./orderlayout/OrderDetails";
import OrderStatusButton from "../../components/order/OrderStatusButton";

const rows = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];

export default function OrderLayout() {
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
      <HomeHeaderWithUserDetails label="Order" />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Order ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Time</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Order Type</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Item Count</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
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
                <TableCell>723778</TableCell>
                <TableCell>2023-01-02</TableCell>
                <TableCell>11.25</TableCell>
                <TableCell>pickup</TableCell>
                <TableCell>02</TableCell>
                <TableCell>
                  <OrderStatusButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "40%",
            height: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <OrderDetails />
      </Dialog>
    </div>
  );
}
