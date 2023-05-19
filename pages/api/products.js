import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    const categoryArray = ["products-bed-services"];

    const results = [];

    for (var i = 0; i < categoryArray.length; i++) {
      const response = await db.collection(categoryArray[i]).find({}).toArray();
      for (var j = 0; j < response.length; j++) {
        results.push(response[j]);
      }
    }

    res.status(200).json(results);

    client.close();
  }
}

export default handler;
