import { Typography } from "@mui/material";
import React from "react";
import CatergoryInputBoxWithLabel from "../../../components/category/CatergoryInputBoxWithLabel";
import PopUpDialogActionButton from "../../../components/common/PopUpDialogActionButton";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserSelectedCatergory,
  updateCatergory,
} from "../../../store/actions/categoryAction";

export default function CatergoryEditLayout() {
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

  const handleClick = () => {
    console.log("work");
    dispatch(updateCatergory(userSelectedCatergory));
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
      <Typography>Catergory Edit</Typography>
      <img
        alt=""
        width="100px"
        src="https://img.freepik.com/premium-vector/chef-icon-with-tray-food-hand_602006-191.jpg?w=2000"
      />
      <div style={{ paddingTop: 10 }}>
        <Typography>Upload Photo</Typography>
      </div>
      <CatergoryInputBoxWithLabel
        value={userSelectedCatergory.name}
        name={"name"}
        handleChange={handlecatergoryChange}
        rows={1}
      />
      <CatergoryInputBoxWithLabel
        value={userSelectedCatergory.description}
        name={"description"}
        handleChange={handlecatergoryChange}
        rows={4}
      />
      <PopUpDialogActionButton handleClick={handleClick} />
    </div>
  );
}
