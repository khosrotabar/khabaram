import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userName, userMobile, userEmail } = JSON.parse(req.body);

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
      const results = await db.collection("users").updateOne(
        {
          mobileNumber: userMobile,
        },
        {
          $set: {
            name: userName,
            email: userEmail,
          },
        }
      );

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }

    client.close();
  }
}

export default handler;
