import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => (
  <div className="flex justify-center items-center ">
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loading;
