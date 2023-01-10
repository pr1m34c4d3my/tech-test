import React from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-[50px] font-bold uppercase">about</h1>
      </div>
      <div className="bg-[#575757]">
        <Footer />
      </div>
    </>
  );
};

export default About;
