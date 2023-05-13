import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Dialog, IconButton } from "@mui/material";
import CatergoryEditLayout from "../../layouts/catergory/catergorylayout/CatergoryEditLayout";
import { updateCatergory } from "../../store/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

export default function CatergoryEditItem({
  handleEdit,
  handleClearLoadingStatus,
}) {
  const dispatch = useDispatch();

  const { userSelectedCatergory } = useSelector(
    (store) => store.catergoryReducer
  );

  const { token } = useSelector((store) => store.employeeReducer);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    handleClearLoadingStatus();
    handleEdit();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    dispatch(updateCatergory(userSelectedCatergory, token));
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
        <CatergoryEditLayout handleClick={handleClick} />
      </Dialog>
    </div>
  );
}
