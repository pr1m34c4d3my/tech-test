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
    <li>
      <a href={menuList.url}>{menuList.name}</a>
    </li>
  );
};

export default MenuList;
