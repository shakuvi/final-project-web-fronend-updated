import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import ReviewLayout from "../layouts/review/ReviewLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeedbacks } from "../store/actions/feedbackAction";
import { Circles } from "react-loader-spinner";

export default function ReviewPage() {
  const dispatch = useDispatch();

  const { allFeedbackList, getAllFeedbackListLoading } = useSelector(
    (store) => store.feedbackReducer
  );

  useEffect(() => {
    dispatch(getAllFeedbacks());
  }, [dispatch]);

  return (
    <div>
      <CommonLayout>
        {getAllFeedbackListLoading === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Circles
                height="120"
                width="120"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          </div>
        ) : getAllFeedbackListLoading === "sucess" ? (
          allFeedbackList.length > 0 ? (
            <ReviewLayout />
          ) : (
            <div>No data</div>
          )
        ) : getAllFeedbackListLoading === "fail" ? (
          <div>Fail</div>
        ) : (
          ""
        )}
      </CommonLayout>
    </div>
  );
}
