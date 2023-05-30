import Item from './Item';
import classes from './MeetupList.module.css';

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

interface ItemListProps {
  items : ItemData[];
}


function ItemList(props:ItemListProps) {
  return (
    <ul className={classes.list}>
      {props?.items?.map((item:ItemData) => (
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
  );
}

export default ItemList;

