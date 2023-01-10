import React from "react";

type Props = {};

const PrimaryButton = (props: Props) => {
  return (
    <button className="mt-5 bg-[#db2d2d] text-[12px] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:bg-white hover:text-[#e70302] hover:scale-110 transition-all">
      <a href="https://wa.me/6282353320182" target="_blank">
        Beli Produk
      </a>
    </button>
  );
};

export default PrimaryButton;
