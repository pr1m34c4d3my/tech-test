import { useEffect, useState } from "react";
import MenuList from "../../atoms/typography/MenuList";

type Props = {};

type Menu = {
  id: number;
  name: string;
  link: string;
};

const MainNav = (props: Props) => {
  const [mainMenu, setMainMenu] = useState<Menu[]>([]);

  useEffect(() => {
    const list = [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About", link: "/about" },
      { id: 3, name: "Fetch", link: "/fetch" },
    ];
    setMainMenu(list);
  }, []);
  return (
    <ul>
      {mainMenu.map((v: any) => {
        return <MenuList key={v.id} menuList={{ name: v.name, url: v.link }} />;
      })}
    </ul>
  );
};

export default MainNav;
