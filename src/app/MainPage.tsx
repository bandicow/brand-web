'use client'

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import logo from "./img/35mm_logo_bg_remove.png";
import mainImg from "../../public/image/35mm_logo_bg_remove.png";

import "../styles/App.css";
import Store from "./sale/Store";
import { Address, Item } from "./model/item";
import BestMenu from "./BestMenu";
import Image from "next/image";
import Link from "next/link";

let data: Item = {
  name: "Momenta Momento",
  category: "tester",
  address: {
    city: "gwangju",
    detail: "gawngsangu",
    zipCode: 12345,
  },
  menu: [
    { name: "T-shirt", price: 30000, category: "top" },
    { name: "jean", price: 50000, category: "bottom" },
  ],
};

const MainPage: React.FC = () => {
  const [productInfo, setProductInfo] = useState<Item>(data);
  const changeAddress = (address: Address) => {
    setProductInfo({ ...productInfo, address: address });
  };
  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App-header">


      <Image src={mainImg} className="Main-img" alt="logo"/>
      <Store info={productInfo} changeAddress={changeAddress} />
      {/* <BestMenu
        name="35mm맨투맨"
        category="상의"
        // price={30000}
        showBestMenuName={showBestMenuName}
      /> */}
      <ul className="Link">
      <Link href="/sale" className="Link-to">sale shop</Link>
      <Link href="/gallery" className="Link-to">gallery</Link>
      </ul>
    </div>
  );
};

export default MainPage;
