import React from "react";
import Header from "../components/organisms/Header";

type Props = {};

const Error = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <h1 className="text-[50px] font-bold uppercase">Error</h1>
      </div>
    </>
  );
};

export default Error;
