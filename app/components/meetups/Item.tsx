import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Link from "next/link";


interface ItemProps {
  id: string;
  name: string;
  imageurl: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  createdAt: Date;
}


function Item(props:ItemProps) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.imageurl} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <Link href={{pathname: `'/'+${props.id}`}}>
           Show Details
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default Item;
