import React from "react";
import { Address, Item } from "../model/item";

// info : Item 형식인 상태

interface OwnProps {
  info: Item;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return (
    <div>
      <h1>{info.name}</h1>
    </div>
  );
};

export default Store;
