import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userMobile, newAddress, oldAddress } = req.body;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    const allAddress = oldAddress.concat(newAddress.address);

    const results = await db.collection("users").updateOne(
      { mobileNumber: userMobile },
      {
        $set: {
          name: newAddress.name,
          email: newAddress.email,
          address: allAddress,
        },
      }
    );

    const results2 = await db
      .collection("users")
      .find({ mobileNumber: userMobile })
      .toArray();

    const user = JSON.parse(JSON.stringify(results2));
    const newAddressFetch = user[0].address;

    res.status(200).json(newAddressFetch);
    console.log(results);

    client.close();
  }
}

export default handler;
