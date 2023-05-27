import { Typography } from "@mui/material";
import React from "react";
import CatergoryInputBoxWithLabel from "../../../components/category/CatergoryInputBoxWithLabel";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import { useSelector, useDispatch } from "react-redux";
import { setUserSelectedCatergory } from "../../../store/actions/categoryAction";

export default function CatergoryEditLayout({ handleClick }) {
  const dispatch = useDispatch();

  const { userSelectedCatergory } = useSelector(
    (store) => store.catergoryReducer
  );

  const handlecatergoryChange = (value, name) => {
    dispatch(
      setUserSelectedCatergory({ ...userSelectedCatergory, [name]: value })
    );
    console.log(name);
    console.log(value);
  };

  console.log(userSelectedCatergory);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontFamily: "Poppins" }}>Catergory Edit</Typography>
      <img
        alt=""
        width="100px"
        src="https://previews.123rf.com/images/elnur/elnur1112/elnur111202053/11571858-circle-with-lots-of-food-items.jpg"
      />
      <div style={{ paddingTop: 10 }}>
        <Typography>Upload Photo</Typography>
      </div>
      <CatergoryInputBoxWithLabel
        value={userSelectedCatergory.name}
        fieldname="Name"
        handleChange={handlecatergoryChange}
        rows={1}
        name="name"
      />
      <CatergoryInputBoxWithLabel
        value={userSelectedCatergory.description}
        fieldname="Description"
        handleChange={handlecatergoryChange}
        rows={4}
        name="description"
      />
      <PopUpDialogActionButton handleClick={handleClick} />
    </div>
  );
}
