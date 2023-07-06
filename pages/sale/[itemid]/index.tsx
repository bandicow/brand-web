import ItemDetail from "../../../components/items/ItemDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";



interface ItemData {
  name: string;
  id: string;
  imageurl: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  createdAt: Date;
}

// 왜 굳이 한번더 넣어서 할까 , 객체안에 객체
//ItemDetailsProps 인터페이스를 사용하여 props의 타입을 명시
interface ItemDetailsProps {
    ItemData: ItemData;
  }
  

function ItemDetails(props: ItemDetailsProps) {

    // 이렇게 하니까 된다. 좋은데?
    const {ItemData} = props;

  return (
    <Fragment>
      <Head>
        <title>{ItemData.name}</title>
        <meta name="description" content={ItemData.description} />
      </Head>
      {/* props 전달 시 객체 전개 연산자(...)를 사용하여 간결하게 전달 */}
      <ItemDetail {...ItemData}  />
    </Fragment>
  );
}

//GetStaticPaths와 GetStaticProps 타입을 사용하여 정적 경로와 정적 프롭스의 타입을 명시

// 데이터 경로를 따라 가져오기
export const getStaticPaths : GetStaticPaths = async() => {
  const client = await MongoClient.connect(
        process.env.MONGODB_URI || ""
    );

  const db = client.db();
  //ItemsCollection의 제네릭으로 ItemData를 명시하여 타입 안정성을 강화
  const ItemsCollection = db.collection<ItemData>("picapo-Items");

  // 이미 명시된걸 받아옴
  const Items = await ItemsCollection.find({}, { projection: { _id: 1 } }).toArray();

  client.close();
  
  // 아래 path 위로 뺌 ,클린코드
    const paths = Items.map(Item => ({
        params : {ItemId : Item._id.toString()}
    }))

  return {
    fallback: false,
    paths
  };
}

export const getStaticProps : GetStaticProps<ItemDetailsProps> = async (context) => {

  const itemId = context.params?.ItemId;

// Array.isArray(itemId)를 사용하여 itemId가 배열인지 확인합니다.
// itemId가 배열인 경우에는 { notFound: true }를 반환하여 404 상태를 처리합니다.

  if (Array.isArray(itemId)) {
    return {
      notFound: true,
    };
  }

  const client = await MongoClient.connect(
    process.env.MONGODB_URI || ""
  );

  const db = client.db();
  const ItemsCollection = db.collection<ItemData>("picapo-Items");


  const selectedItem = await ItemsCollection.findOne<ItemData>({
    _id: new ObjectId(itemId),
  });

  client.close();

//  GetStaticPropsResult<ItemDetailsProps> 타입 대신 notFound 속성이 있는 { notFound: true } 객체를 반환하여 404 상태를 처리할 수 있도록 수정했습니다.
//  selectedItem이 null인 경우를 처리하기 위해 if 문을 추가하여 notFound 값을 반환합니다.
// 반환 타입을 { notFound: true } 또는 { props: ItemDetailsProps }로 지정했습니다.
  if (!selectedItem) {
    return {
      notFound: true,
    };
  }


  return {
    props: {
      ItemData: {
        id: selectedItem.id.toString(),
        name: selectedItem.name,
        imageurl: selectedItem.imageurl,
        price: selectedItem.price,
        category: selectedItem.category,
        stock: selectedItem.stock,
        description: selectedItem.description,
        createdAt: selectedItem.createdAt,
      },
    },
  };
}

export default ItemDetails;