import React from "react";
import { Circles } from "react-loader-spinner";

export default function LoadingComponet() {
  return (
    <Circles
      height="120"
      width="120"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
