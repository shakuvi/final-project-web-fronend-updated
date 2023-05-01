import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodsByCatergory } from "../store/actions/foodAction";

export default function CatergoryFoods() {
  const dispatch = useDispatch();
  const { userSelectedCatergory } = useSelector(
    (store) => store.catergoryReducer
  );

  useEffect(() => {
    dispatch(getAllFoodsByCatergory(userSelectedCatergory._id));
  }, [dispatch, userSelectedCatergory]);

  console.log(userSelectedCatergory);

  return (
    <div>
      <CommonLayout></CommonLayout>
    </div>
  );
}
