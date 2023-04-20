import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Dialog, IconButton } from "@mui/material";
import CatergoryEditLayout from "../../layouts/catergory/catergorylayout/CatergoryEditLayout";

export default function CatergoryEditItem({
  handleEdit,
  handleClearLoadingStatus,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    handleEdit();
    setOpen(true);
  };

  const handleClose = () => {
    handleClearLoadingStatus();
    setOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        width: "40px",
        height: "40px",
        position: "absolute",
        borderRadius: "50px",
        bottom: 5,
        border: "1px solid black",
        backgroundColor: "#FFFFFF",
      }}
    >
      <IconButton onClick={handleClickOpen}>
        <EditOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "40%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <CatergoryEditLayout />
      </Dialog>
    </div>
  );
}
