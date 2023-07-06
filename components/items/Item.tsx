import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Link from "next/link";


interface ItemProps {
  name: string;
  id: string;
  description: string;
  price: number ;
  category: string;
  imageurl: string;
  stock: number;
  createdAt: Date | string;
}


function Item(props:ItemProps) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.imageurl} alt={props.name} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          {/* <p>{props.price}</p> */}
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
