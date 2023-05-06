import React from "react";
import { Circles } from "react-loader-spinner";

export default function LoadingComponet() {
  return (
    <Circles
      height="120"
      width="120"
      color="#FD5C25"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
