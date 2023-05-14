import { Dialog, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CatergoryEditLayout from "../../layouts/catergory/catergorylayout/CatergoryEditLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCatergoryCreateStatus,
  createCatergory,
  setUserSelectedCatergory,
} from "../../store/actions/categoryAction";

export default function CatergoryAdd() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const { userSelectedCatergory } = useSelector(
    (store) => store.catergoryReducer
  );

  const { token } = useSelector((store) => store.employeeReducer);

  const handleAddNewUser = () => {
    setOpen(true);
    dispatch(
      setUserSelectedCatergory({ name: "", description: "", image: "" })
    );
    dispatch(clearCatergoryCreateStatus());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    handleClose();
    dispatch(createCatergory(userSelectedCatergory, token));
  };

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "150px",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 2px #FE6329",
          borderRadius: 20,
        }}
        onClick={handleAddNewUser}
      >
        <AddIcon sx={{ fontSize: 70 }} />
        <Typography>Add</Typography>
      </div>
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
