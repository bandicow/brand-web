import Image from "next/image";
import classes from "./MeetupDetail.module.css";


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


export default function ItemDetail(props : ItemData) {
  return (
    <section className={classes.detail}>
      <Image src={props.imageurl} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </section>
  );
}

