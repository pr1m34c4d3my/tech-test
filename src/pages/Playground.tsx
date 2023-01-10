import { SyntheticEvent, useState } from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

const Playground: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (e: SyntheticEvent): void => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <button
          onClick={(e) => {
            increment(e);
          }}
          className="w-[150px] px-5 py-2 m-6 bg-cyan-500 rounded-xl shadow-xl text-white hover:bg-white hover:text-black ease-in duration-200 font-bold"
        >
          +
        </button>
        <span className="font-black text-[30px]">
          {count === 0 ? "0" : count}
        </span>
        <button
          onClick={(e) => {
            decrement(e);
          }}
          className="w-[150px] px-5 py-2 m-6 bg-cyan-500 rounded-xl shadow-xl text-white hover:bg-white hover:text-black ease-in duration-200 font-bold"
        >
          -
        </button>
      </div>
      <div className="bg-[#575757]">
        <Footer />
      </div>
    </>
  );
};

export default Playground;
