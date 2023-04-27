import * as Actions from "../actions/feedbackAction";

const inisialState = {
  getAllFeedbackListLoading: "notStarted",
  allFeedbackList: [],
};

const feedbackReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_FEEDBACKS_LOADING:
      return { ...state, getAllFeedbackListLoading: "loading" };

    case Actions.GET_ALL_FEEDBACKS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllFeedbackListLoading: "sucess",
        allFeedbackList: action.payload,
      };

    case Actions.GET_ALL_FEEDBACKS_FAIL:
      return {
        ...state,
        getAllFeedbackListLoading: "fail",
        allFeedbackList: [],
      };

    default:
      return state;
  }
};

export default feedbackReducer;
