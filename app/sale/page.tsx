import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import ItemList from "../components/meetups/ItemList";

export async function getStaticProps() {
  interface ItemData {
    name: string;
    id: string;
    description: string;
    price: number;
    category: string;
    imageurl: string;
    stock: number;
    createdAt: Date;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI || "");
  const db = client.db();
  const itemsCollection = db.collection("picapo-items");
  const items: ItemData[] = await itemsCollection
    .find()
    .toArray()
    .then((data) =>
      data.map((item) => ({
        name: item.name,
        id: item._id.toString(),
        description: item.description,
        price: item.price,
        category: item.category,
        imageurl: item.imageurl,
        stock: item.stock,
        createdAt: item.createdAt,
      }))
    );
  client.close();

  return {
    props: {
      items: items,
    },
    revalidate: 10,
  };
}


interface ItemData {
  name: string;
  id: string;
  description: string;
  price: number;
  category: string;
  imageurl: string;
  stock: number;
  createdAt: Date;
}
interface SaleShopProps {
  items: ItemData[];
}

const SaleShop: React.FC<SaleShopProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>PICAPO</title>
        <meta name="description" content="PICAPO 브랜드 사이트" />
      </Head>
      <div>
        <h1>SaleShop</h1>
        <p>Fortest</p>
        <ItemList items={props.items} />
      </div>
    </Fragment>
  );
};

export default SaleShop;