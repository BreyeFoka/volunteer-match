import connectMongo from '../../lib/mongodb';

export default async function handler(req, res) {
  await connectMongo();
  res.json({ message: 'MongoDB connection successful!' });
}
