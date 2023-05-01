import axios from "axios";

export const GET_ALL_FOOD_ITEMS_LOADING = "GET_ALL_FOOD_ITEMS_LOADING";
export const GET_ALL_FOOD_ITEMS_SUCESS = "GET_ALL_FOOD_ITEMS_SUCESS";
export const GET_ALL_FOOD_ITEMS_FAIL = "GET_ALL_FOOD_ITEMS_FAIL";

export const getAllFoodsByCatergory = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_FOOD_ITEMS_LOADING });
    axios
      .post("http://localhost:5000/food/get-food-by-catergory-id", {
        category: id,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_FOOD_ITEMS_SUCESS,
          payload: response.data.foods,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_FOOD_ITEMS_FAIL });
      });
  };
};
