import React from "react";
import { Menu } from "./model/item";

interface OwnProps extends Omit<Menu, "price"> {
  showBestMenuName(name: string): string;
}

// type OwnProps = Menu & {
//   showBestMenuName(name: string): string;
// };

const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenuName }) => {
  return (
    <div>
      <span>
      {name}
      </span>
       <p>{category}</p>
    </div>
  );
};

export default BestMenu;
