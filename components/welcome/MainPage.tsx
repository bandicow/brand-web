// "use client";

import React from "react";

import mainImg from "../../public/image/35mm_logo_bg_remove.png";

import Image from "next/image";
import Link from "next/link";


const MainPage: React.FC = () => {


  return (
    <div className="App-header">
      <Image src={mainImg} className="Main-img" alt="logo" />
      <ul className="Link">
        <Link href="/sale" className="Link-to">
          sale shop
        </Link>
        <Link href="/gallery" className="Link-to">
          gallery
        </Link>
      </ul>
    </div>
  );
};

export default MainPage;
