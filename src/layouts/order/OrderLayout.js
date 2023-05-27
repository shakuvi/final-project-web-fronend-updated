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
export default function OrderLayout({
  info: rows,
  handleorderdata,
  allOrdersById,
  getAllOrderByIdLoading,
}) {
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
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Order ID
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Date
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Time
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Order Type
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Item Count
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontFamily: "Poppins" }}>
                Status
              </TableCell>
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
                  handleorderdata(val);
                }}
                style={
                  selectedRow === val
                    ? { backgroundColor: "#FD5C25", color: "white" }
                    : {}
                }
              >
                <TableCell
                  style={
                    selectedRow === val
                      ? { color: "white", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  {val._id}
                </TableCell>
                <TableCell
                  style={
                    selectedRow === val
                      ? { color: "white", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  {val.createDate}
                </TableCell>
                <TableCell
                  style={
                    selectedRow === val
                      ? { color: "white", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  {val.createTime}
                </TableCell>
                <TableCell
                  style={
                    selectedRow === val
                      ? { color: "white", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  {val.orderType.orderType}
                </TableCell>
                <TableCell
                  style={
                    selectedRow === val
                      ? { color: "white", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  02
                </TableCell>

                <TableCell>
                  {val.status === "pending" ? (
                    <OrderStatusButton
                      backgroundColor="#FBCAFF"
                      color="#91109C"
                      name="Pending"
                      isActive
                    />
                  ) : val.status === "served" ? (
                    <OrderStatusButton
                      backgroundColor="#B1D0FF"
                      color="#0A2B7D"
                      name="Served"
                      isActive
                    />
                  ) : val.status === "completed" ? (
                    <OrderStatusButton
                      backgroundColor="#DAFFAA"
                      color="#216708"
                      name="Completed"
                      isActive
                    />
                  ) : val.status === "ready" ? (
                    <OrderStatusButton
                      backgroundColor="#B1D0FF"
                      color="#0A2B7D"
                      name="Ready"
                      isActive
                    />
                  ) : null}
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
            width: "60%",
            height: "60%",
          },
        }}
      >
        <OrderDetails
          allOrdersById={allOrdersById}
          getAllOrderByIdLoading={getAllOrderByIdLoading}
        />
      </Dialog>
    </div>
  );
}
