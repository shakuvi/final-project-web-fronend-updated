import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import ReviewLayout from "../layouts/review/ReviewLayout";
import { useDispatch } from "react-redux";
import { getAllFeedbacks } from "../store/actions/feedbackAction";

export default function ReviewPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeedbacks());
  }, [dispatch]);

  return (
    <div>
      <CommonLayout>
        <ReviewLayout />
      </CommonLayout>
    </div>
  );
}
