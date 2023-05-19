import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { mobileCode, userMobileNumber } = req.body;

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
      .find({ mobileNumber: userMobileNumber })
      .toArray();

    const user = JSON.parse(JSON.stringify(results));

    if (user.length == 0) {
      const userData = {
        name: "",
        mobileNumber: userMobileNumber,
        address: [],
        email: "",
        mobileCode: mobileCode,
        shoppingCart: [],
        purchases: [],
      };
      const results = await db.collection("users").insertOne(userData);

      res.status(200).json(userData.mobileNumber);

      console.log(results);
    } else if (user[0].mobileCode !== mobileCode) {
      res.status(200).json(false);
    } else {
      res.status(200).json(user[0].mobileNumber);
    }

    client.close();
  }
}

export default handler;
