import axios from "axios";

export const GET_ALL_CATEGORIES_LOADING = "GET_ALL_CATEGORIES_LOADING";
export const GET_ALL_CATEGORIES_SUCESS = "GET_ALL_CATEGORIES_SUCESS";
export const GET_ALL_CATEGORIES_FAIL = "GET_ALL_CATEGORIES_FAIL";

export const SET_USER_SELECTED_CATERGORY = "SET_USER_SELECTED_CATERGORY";

export const UPDATE_CATERGORY_START = "UPDATE_CATERGORY_START";
export const UPDATE_CATERGORY_SUCCESS = "UPDATE_CATERGORY_SUCCESS";
export const UPDATE_CATERGORY_FAIL = "UPDATE_CATERGORY_FAIL";

export const CLEAR_UPDATE_CATERGORY_LOADING_STATUS =
  "CLEAR_UPDATE_CATERGORY_LOADING_STATUS";

export const CREATE_CATERGORY_START = "CREATE_CATERGORY_START";
export const CREATE_CATERGORY_SUCCESS = "CREATE_CATERGORY_SUCCESS";
export const CREATE_CATERGORY_FAIL = "CREATE_CATERGORY_FAIL";

export const CLEAR_CREATE_CATERGORY_STATUS = "CLEAR_CREATE_CATERGORY_STATUS";

export const getAllCatergories = (token) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORIES_LOADING });
    axios
      .get("https://nsbmproject.radikadilanka.com:5000/foodcatergory/get-all", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
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

export const setUserSelectedCatergory = (catergory) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_CATERGORY, payload: catergory });
  };
};

export const updateCatergory = (catergory, token) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_CATERGORY_START });
    axios
      .post(
        "https://nsbmproject.radikadilanka.com:5000/foodcatergory/update",
        {
          catergory,
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
          type: UPDATE_CATERGORY_SUCCESS,
          payload: response.data.foodcatergory,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_CATERGORY_FAIL });
      });
  };
};

export const clearCatergoryLoadingStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_UPDATE_CATERGORY_LOADING_STATUS });
  };
};

export const createCatergory = (catergory, token) => {
  return (dispatch) => {
    dispatch({ type: CREATE_CATERGORY_START });
    axios
      .post(
        "https://nsbmproject.radikadilanka.com:5000/foodcatergory/create",
        {
          catergory,
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
          type: CREATE_CATERGORY_SUCCESS,
          payload: response.data.foodcatergory,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: CREATE_CATERGORY_FAIL });
      });
  };
};

export const clearCatergoryCreateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_CREATE_CATERGORY_STATUS });
  };
};
