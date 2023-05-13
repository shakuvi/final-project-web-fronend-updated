import axios from "axios";

export const GET_ALL_FOOD_ITEMS_LOADING = "GET_ALL_FOOD_ITEMS_LOADING";
export const GET_ALL_FOOD_ITEMS_SUCESS = "GET_ALL_FOOD_ITEMS_SUCESS";
export const GET_ALL_FOOD_ITEMS_FAIL = "GET_ALL_FOOD_ITEMS_FAIL";

export const SET_EMPLOYEE_SELECTED_FOOD = "SET_EMPLOYEE_SELECTED_FOOD";

export const UPDATE_FOOD_START = "UPDATE_FOOD_START";
export const UPDATE_FOOD_SUCCESS = "UPDATE_FOOD_SUCCESS";
export const UPDATE_FOOD_FAIL = "UPDATE_FOOD_FAIL";

export const CLEAR_UPDATE_FOOD_LOADING_STATUS =
  "CLEAR_UPDATE_FOOD_LOADING_STATUS";

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

export const setEmployeeSelectedFood = (food) => {
  return (dispatch) => {
    dispatch({ type: SET_EMPLOYEE_SELECTED_FOOD, payload: food });
  };
};

export const updateFood = (food, token) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_FOOD_START });
    axios
      .post(
        "http://localhost:5000/food/update",
        {
          food,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_FOOD_SUCCESS,
          payload: response.data.food,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_FOOD_FAIL });
      });
  };
};

export const clearFoodLoadingStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_UPDATE_FOOD_LOADING_STATUS });
  };
};
