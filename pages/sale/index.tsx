
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import ItemList from "../../components/items/ItemList";
import { GetStaticProps, NextPage } from "next";

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

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("데이터 연결 실패");
}

interface SaleShopProps {
  items: ItemData[];
}

export const getStaticProps: GetStaticProps<SaleShopProps> = async () => {
  console.log("getStaticProps called");

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const itemsCollection = db.collection("picapo-items");
    const items = await itemsCollection.find().toArray();
    console.log(items);
    console.log('nothing');
    client.close();

    return {
      props: {
        items: items.map((item) => ({
          name: item.name,
          description: item.description,
          price: item.price,
          stock: item.stock,
          category: item.category,
          createdAt: item.createdAt,
          imageurl: item.imageurl,
          id: item._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        items: [],
      },
      revalidate: 10,
    };
  }
};

const SaleShop: NextPage<SaleShopProps> = (props) => {
  console.log(props.items);
  console.log("작동중");

  return (
    <Fragment>
      <Head>
        <title>PICAPO</title>
        <meta name="description" content="PICAPO 브랜드 사이트" />
      </Head>
      <h1>SaleShop</h1>
      {/* <ItemList items={props.items} /> */}
    </Fragment>
  );
};

export default SaleShop;
