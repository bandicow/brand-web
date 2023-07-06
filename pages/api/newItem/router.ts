import { NextApiResponse , NextApiRequest } from 'next';
import { MongoClient, ObjectId } from "mongodb";
import { nanoid } from 'nanoid';


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
      interface ItemData {
    _id: ObjectId;
    name: string;
    imageurl: string;
    price: number;
    category: string;
    stock: number;
    description: string;
    createdAt: Date;
  }


    if (req.method === "POST") { 
      const { _id, ...itemdata }: ItemData = req.body;
    
      const itemId = nanoid(); 
      
        // const { id, name, imageurl, price, category
        // , stock, description, createdAt}: ItemData = data;

        const client = await MongoClient.connect(
            process.env.MONGODB_URI || ""
            )

        const db = client.db();

        const itemCollection = db.collection("picapo-items");

        const result = await itemCollection.insertOne({ _id : new ObjectId((itemId)), itemdata});

        console.log(result);

        client.close();

        res.status(201).json({ message: "제품 추가 완료" });
    }
}