import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('MongoDB connection string is not defined in the environment variables');
}

let cachedDb: Db | null = null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const data = JSON.parse(req.body);
      const { _id, name, imageurl, price, category, stock, description, createdAt } = data;

      const client = await MongoClient.connect(MONGODB_URI);
      const db = client.db();
      // const db = await connectToDatabase();
      const itemCollection = db.collection('picapo-items');
      const result = await itemCollection.insertOne(data);

      console.log(result);

      res.status(201).json({ message: '제품 추가 완료' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: '서버가 잠시 중단되었습니다.' });
  }
}
