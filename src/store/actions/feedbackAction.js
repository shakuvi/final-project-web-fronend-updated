import axios from "axios";

export const GET_ALL_FEEDBACKS_LOADING = "GET_ALL_FEEDBACKS_LOADING";
export const GET_ALL_FEEDBACKS_SUCESS = "GET_ALL_FEEDBACKS_SUCESS";
export const GET_ALL_FEEDBACKS_FAIL = "GET_ALL_FEEDBACKS_FAIL";

export const getAllFeedbacks = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_FEEDBACKS_LOADING });
    axios
      .get("https://nsbmproject.radikadilanka.com:5000/feedback/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_FEEDBACKS_SUCESS,
          payload: response.data.feedback,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_FEEDBACKS_FAIL });
      });
  };
};
