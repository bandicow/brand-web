import { Int32 } from "mongodb";
import Item from "./Item";
import classes from "./MeetupList.module.css";

interface ItemData {
  name: string;
  id: string;
  description: string;
  price: number;
  category: string;
  imageurl: string;
  stock: number;
  createdAt: Date | string;
}

interface ItemListProps {
  items: ItemData[];
}

function ItemList(props: ItemListProps) {
  return (
    <>
      <h2>작동테스트</h2>
      <ul className={classes.list}>
        {props.items?.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            imageurl={item.imageurl}
            price={item.price}
            category={item.category}
            stock={item.stock}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
