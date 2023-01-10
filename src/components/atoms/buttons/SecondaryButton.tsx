import React from "react";

type Props = {};

const SecondaryButton = (props: Props) => {
  return (
    <button className="bg-[#F5F5F5] text-[15px] h-[40px] w-[180px] rounded-lg font-bold hover:border-[1px] hover:bg-white hover:text-main transition-all">
      <a href="#">Lihat Produk Lain</a>
    </button>
  );
};

export default SecondaryButton;
