import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { shoppingCartProducts } = req.body;

    const productsArr = [];

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    try {
      for (var i = 0; i < shoppingCartProducts.length; i++) {
        const results = await db
          .collection("products")
          .find({ categoryEn: shoppingCartProducts[i].category })
          .limit(8)
          .toArray();

        const products = JSON.parse(JSON.stringify(results));
        for (var j = 0; j < products.length; j++) {
          productsArr.push(products[j]);
        }
      }

      res.status(200).json(productsArr);
    } catch (err) {
      res.status(500).json(err);
    }

    client.close();
  }
}

export default handler;
