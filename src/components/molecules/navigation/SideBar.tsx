import React from "react";
import SecondaryButton from "../../atoms/buttons/SecondaryButton";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col justify-start w-4/12 ">
      <div className="flex flex-col gap-5 min-h-[350px]">
        <h1 className="font-bold text-[24px]">Produk Paling Laris</h1>
        <ul className="flex flex-col gap-1 text-[16px] text-secondary underline cursor-pointer">
          <li>Iphone</li>
          <li>Samsung</li>
          <li>Asus</li>
        </ul>
        <div>
          <SecondaryButton />
        </div>
      </div>
      <div>Banner Iklan</div>
    </div>
  );
};

export default SideBar;
