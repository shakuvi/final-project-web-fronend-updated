import axios from "axios";

export const GET_ALL_CATEGORIES_LOADING = "GET_ALL_CATEGORIES_LOADING";
export const GET_ALL_CATEGORIES_SUCESS = "GET_ALL_CATEGORIES_SUCESS";
export const GET_ALL_CATEGORIES_FAIL = "GET_ALL_CATEGORIES_FAIL";

export const getAllCatergories = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORIES_LOADING });
    axios
      .get("https://nsbmproject.radikadilanka.com:5000/foodcatergory/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_CATEGORIES_SUCESS,
          payload: response.data.foodcatergory,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_CATEGORIES_FAIL });
      });
  };
};
