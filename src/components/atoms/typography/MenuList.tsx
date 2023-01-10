import React from "react";

type List = {
  name: string;
  url: string;
};

type Props = {
  menuList: List;
};

const MenuList = ({ menuList }: Props) => {
  return (
    <li className="p-4 border-b-2 border-main border-opacity-0 hover:border-opacity-100 hover:text-main duration-200 cursor-pointer">
      <a href={menuList.url}>{menuList.name}</a>
    </li>
  );
};

export default MenuList;
