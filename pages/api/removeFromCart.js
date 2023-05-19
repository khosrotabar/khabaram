import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userMobile, code } = req.body;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    const results = await db
      .collection("users")
      .find({ mobileNumber: userMobile })
      .toArray();

    const user = JSON.parse(JSON.stringify(results));

    const shoppingCartSave = user[0].shoppingCart.filter(
      (item) => item.code !== code
    );

    const results2 = await db.collection("users").updateOne(
      { mobileNumber: userMobile },
      {
        $set: {
          shoppingCart: shoppingCartSave,
        },
      }
    );

    res.status(200).json(shoppingCartSave);
    console.log(results2);

    client.close();
  }
}

export default handler;
