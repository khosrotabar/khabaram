import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userMobileNumber, title, price, final_price, src, code } = req.body;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    const data = {
      user: userMobileNumber,
      title: title,
      price: price,
      final_price: final_price,
      image_url: src,
      code: code,
    };

    const results = await db
      .collection("user-favorites")
      .find({ code: code })
      .toArray();

    if (results.length == 0) {
      try {
        const results2 = await db.collection("user-favorites").insertOne(data);
        res.status(200).json(results2);
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(200).json("this item exist in database");
    }

    client.close();
  }
}

export default handler;
