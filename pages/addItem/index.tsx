'use client';
import React, { Fragment } from 'react'
import { useRouter } from 'next/router';

import NewItemForm from '../../components/items/NewItemForm'
import Head from 'next/head';

const AddItem = () => {

  interface ItemData {
    name: string;
    imageurl: string;
    price: number;
    category: string;
    stock: number;
    description: string;
    createdAt: { $date: Date };
  }


  const router = useRouter();
  const API_URL = "/api/newItem";

  const addItemHandler = async (enteredItemData: ItemData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(enteredItemData),
      headers: {
        'Content-Type': `applcation/json`,
      },
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();


    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>새 상품 추가</title>
        <meta name="설명" content="고객들에게 새 상품을 보여주기 위해 추가하세요!" />
      </Head>
      <NewItemForm onAddItem={addItemHandler}></NewItemForm>

    </Fragment>
  )
}

export default AddItem;